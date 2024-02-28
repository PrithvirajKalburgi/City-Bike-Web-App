//based off of eric's API from the bagel shop site
// Station item model to interact with the database
const mongoose = require("mongoose");

const journeySchema = new mongoose.Schema({
  Departure: {
    type: String,
    required: true,
  },
  Return: {
    type: String,
    required: true,
  },
  DeparturSstationid: {
    type: String,
    required: false,
  },
  ReturnStationid: {
    type: Number,
    required: false,
  },
  CoveredDistanceMeters: {
    type: Number,
    required: false,
  },
  DurationSec: {
    type: Number,
    required: false,
  },
});

// Model allows direcet interaction with the database
module.exports = mongoose.model("Journey", journeySchema);
