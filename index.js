const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


// Importing Routes
const userRoute = require('./routes/user');



// Route middlewares
app.use('/api/users', userRoute);



// Connected to the Database
const url = process.env.DB_TOKEN;
mongoose.connect(url,
{ useNewUrlParser: true},
 () => console.log('Connected to the Database'));
// Listening to Port
app.listen(3000, ()=>
 console.log('Server Up and Listening to port 3000')
 );