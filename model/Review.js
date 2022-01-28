const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
 /* for the review we need user information and restaurant information 
 we also need rating schema where input data from user can be stored */
 user_id: {
     type: mongoose.Schema.Types.ObjectId,
     ref:"User"
 },
 restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
},

rating: [{
    service: Number,
    food: Number,
    presentation: Number,
    price: Number,
    environment: Number
}],
//review contents stored in review Schema
review: String




});

module.exports = mongoose.model("Review", reviewSchema);



