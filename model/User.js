const mongoose = require('mongoose');


// creating user Schema
const userSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true,
        max:100, 
        min: 6
    },
    email: {
        type: String, 
        required: true,
        max:105,
        min:6
    },
    password: {
        type: String,
        required: true,
        max:1024, // we will be hashing the password and it could be unknown numbers of characters
        min:8
    },
    date: {
        type: Date,
        default:Date.now
    }
});


module.exports = mongoose.model("User", userSchema);