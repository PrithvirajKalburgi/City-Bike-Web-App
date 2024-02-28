const mongoose = require('mongoose');

const journeySchema = mongoose.Schema({
    Departure: {
        type: String,
        required: true
    },
    Return: {
        type: String,
        required: true
    },
    DepartureStationid: {
        type: Number,
        required: true
    },
    DepartureStationName: {
        type: String,
        required: true
    },
    ReturnStationid: {
        type: Number,
        required: true
    },
    ReturnStationName: {
        type: String,
        required: true
    },
    CoveredDistanceMeters: {
        type: Number,
        required: true
    },
    DurationSec: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Journey', journeySchema);