const router = require('express').Router();
// importing user model to pass user informtion in different route
const User = require('../model/User');
const Order = require('../model/Order');
const Review = require('../model/Review');



// this router will route with specific id of the user
router.get('/:id', async(req, res) => {
    try{
        const user =await User.findById(req.params.id);
        res.json({message: user});
    }catch(error){
        res.json({message:error})
    }
});




module.exports = router;