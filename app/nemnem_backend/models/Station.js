const mongoose = require('mongoose');

const stationSchema = mongoose.Schema({
    FID: Number,
    ID: Number,
    Nimi: String,
    Name: String,
    Osoite: String,
    Adress: String,
    City: String,
    Operator: String,
    Capacites: Number,
    x: Number,
    y: Number
});

module.exports = mongoose.model('Station', stationSchema);