const mongoose = require('mongoose');


// creating Restaurant Schema
const restaurantSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    email: {
        type: String, 
        required: true,
        max: 255,
        min: 6

    },
    address: {
        type: String, 
        required: true
    },
    menu: [{
        name: String,
        item_price: Number
    }]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);