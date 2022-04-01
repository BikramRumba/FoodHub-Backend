const router = require('express').Router();
const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation'); //importing validation schema that we created in validation file
const jwt = require('jsonwebtoken');

//Register validation
router.post('/register', async (req, res) => {
	// Lets validate the data before we make a user

	const { error } = registerValidation(req.body); //it will create an object
	if (error) return res.status(400).send(error.details[0].message);

	/*     We need to check if the user is already in the database
    we will wait await and use findOne() method to findout the email from the req.body 
    in our database system
*/
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exists');

	//  we dont't want to store open password in the database space
	// We need to hash the password. We need to install bcryptjs

	// we created a salt and bcrypt with salt to hash the password
	const salt = await bcrypt.genSalt(10); // generating 10 digits salt
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		res.send({ user: user._id });
	} catch (error) {
		res.status(400).send(error);
	}
});

//LOGIN validation
/* router.post('/login1', async (req, res) => {
	// Lets validate the data before we make a user
	const { error } = loginValidation(req.body); //it will create an object
	if (error) return res.status(400).send(error.details[0].message);
	// If email exist in our database
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email is not found');

	// CHECKING IF PASSWORD IS CORRECT
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid password');

	// we need to install JWT Token
	// now let's create and assign a token
	//front-end will get the access for login
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
	// res.send("logged in!!!!!!")
	// at the end create verifyToken file in a route
});
 */
router.post('/login', async (req, res) => {
	const { error } = loginValidation(req.body); //it will create an object
	if (error) return res.status(400).send(error.details[0].message);
	// console.log('login route fetched');
	const user = await User.findOne({ email: req.body.email });
	// console.log(user);
	if (user) {
		if (await bcrypt.compare(req.body.password, user.password)) {
			const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
			//res.header('auth-token', token).send(token);
			res.send({
				name: user.name,
				token: token,
			});
			return;
		} else {
			res.send('Invalid Password');
		}
	} else {
		res.send('User wasnot Found');
	}
});

module.exports = router;
