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

/* Listing orders place by a user
 */

router.get('/:id/orders', async(req, res) => {
    try{
        const order = await Order.find({
            "user_id": req.params.id
        })
        .populate("user_id")
        .populate("restaurant_id");

        res.json({message:order});

    }catch(error){
        res.json({message:error});
    }
});


/* Reviews placed by a specific user on restaurants */
router.get('/:id/reviews', async(req, res) => {
 try{
     const reviews = await Review.find({
         "user_id":req.params.id
     })
     .populate("user_id")
     .populate("restaurant_id");

     res.json({message:reviews});

 }catch(error){
     res.json({message:error});
 }
});


module.exports = router;