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


/*  Input data in Postman . We can pass the data in following way:

{
	"name": "Curry House",
	"email": "curry@gmail.com",
	"address": "123 US",
	"menu": [{
				"name": "chicken curry",
				"item_price": "15"
				},
				{
					"name": "Butter Chicken",
					"item_price" : "17"
				},
				{
					"name" : "Grilled Chicken",
					"item_price": "20"
				}
					]
}

ANother restaurant
{
    "message": {
        "name": "Nepal House",
        "email": "Nepal@gmail.com",
        "address": "Kathmandu, Nepal",
        "menu": [
            {
                "name": "mutton Taas",
                "item_price": 15,
                "_id": "61f453287cc82b9b63b36582"
            },
            {
                "name": "choila",
                "item_price": 17,
                "_id": "61f453287cc82b9b63b36583"
            },
            {
                "name": "Chicken momo",
                "item_price": 20,
                "_id": "61f453287cc82b9b63b36584"
            }
        ],
        "_id": "61f453287cc82b9b63b36581",
        "__v": 0
    }
}
*/