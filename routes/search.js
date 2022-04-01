const router = require('express').Router();
// importing restaurant model to pass the schema for searching
const Restaurant = require('../model/Restaurant');

// We need to route to search page with restaurant's info

router.get('/restaurant', async (req, res) => {
	try {
		let { name } = req.query;
		//console.log(name);
		// we will be using finding algorithm find() method
		// find returns array []
		const restaurants = await Restaurant.find({ name });
		if (!restaurants) {
			return res.send({
				message: 'Please enter correct name and address of the restaurant',
			});
		}
		res.json({ result: restaurants }); // finally we will be sending restaurant info as a JSON file
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
