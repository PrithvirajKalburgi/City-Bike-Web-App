const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Departure: String,
    Return: String,
    DepartureStationid: Number,
    DepartureStationName: String,
    ReturnStationid: Number,
    ReturnStationName: String,
    CoveredDistanceMeters: Number,
    DurationSec: Number
});


module.exports = mongoose.model('Post', PostSchema);