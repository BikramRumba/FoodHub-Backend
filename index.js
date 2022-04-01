const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');
// environment variable
dotenv.config();

// Importing Routes
const userRoute = require('./routes/user');
const restaurantRoute = require('./routes/restaurant');
const searchRoute = require('./routes/search');
const authRoute = require('./routes/auth');

// Importing Middleware
app.use(express.json());
app.use(cors());

// Route middlewares
app.use('/users', userRoute);
app.use('/restaurants', restaurantRoute);
app.use('/search', searchRoute);
app.use('/auth', authRoute);

// Connected to the Database
const url = process.env.DB_TOKEN;
mongoose.connect(url, { useNewUrlParser: true }, () =>
	console.log('Connected to the Database')
);

const port = process.env.PORT || 5000;
// Listening to Port
app.listen(port, () => console.log(`Server Up and Listening to port ${port}`));
