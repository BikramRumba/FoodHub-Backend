const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: {
        type: String
    },
    subTotal: {
        type: Number
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }
});

module.exports = mongoose.model("Order", orderSchema);