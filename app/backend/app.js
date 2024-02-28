const express = require('express');

const app =express();

//now we have the ability to create routes after the stuff above

//Routes
//will move these to the routes folder later
app.get('/', (req,res) => {
    res.send('we are home')
})

// how we will start listening to the server
app.listen(3000);