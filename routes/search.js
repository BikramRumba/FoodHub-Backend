const router = require('express').Router();
// importing restaurant model to pass the schema for searching
const restaurant = require('../model/Restaurant');

// We need to route to search page with restaurant's info

router.get('/', async(req,res) => {
    try{
       let restaurantName = req.query.name;
       let restaurantAddress = req.query.address;
       
       if(restaurantName != undefined && restaurantAddress !=undefined){
          let search = {
            name: restaurantName,
            address: restaurantAddress
           }
          
       } else if (restaurantName == undefiend && restaurantAddress == undefined){
        let search = {} // it will return null
    }
    else if(restaurantName == undefined && restaurantAddress != undefined){
        let search={
            address:restaurantAddress
        } 

    } else if( restaurantName != undefined && restaurantAddress == undefined){
        let search = {
            name:restaurantName
        }
    }
    
    // we will be using finding algorithm find() method
// find returns array []
    const Restaurant = await restaurant.find(this.search);
    if(!Restaurant.length){
        return res.send(" Please enter correct name and address of the restaurant");
    }
    res.json({message: Restaurant}); // finally we will be sending restaurant info as a JSON file
       

    }catch(error){
        res.json({message: error})
    }
});






module.exports = router;