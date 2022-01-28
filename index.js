const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// environment variable
dotenv.config();


// Importing Routes 
const userRoute = require('./routes/user');
const restaurantRoute = require('./routes/restaurant');
const searchRoute = require('./routes/search');

// Importing Middleware
app.use(express.json());

// Route middlewares
app.use('/users', userRoute);
app.use('/restaurants', restaurantRoute);
app.use('/search', searchRoute);


// Connected to the Database
const url = process.env.DB_TOKEN;
mongoose.connect(url,
{ useNewUrlParser: true},
 () => console.log('Connected to the Database'));

 // Listening to Port
app.listen(3000, ()=>
 console.log('Server Up and Listening to port 3000')
 );