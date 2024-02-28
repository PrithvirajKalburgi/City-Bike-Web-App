const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import routes
const journeysRoute = require('./routes/journeys');
const stationsRoute = require('./routes/stations');
const postRoute = require('./routes/posts');

app.use('/journeys', journeysRoute);
app.use('/stations', stationsRoute);
app.use('/posts', postRoute);

// Routes
app.get('/', (req,res) => {
    res.send('Home');
});



// Connect db
if (process.env.NODE_ENV !== "Dataset") {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log('Connect db');
  }

// Start listening to server
app.listen(3000);
