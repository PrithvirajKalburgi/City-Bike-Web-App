

//based off of eric's API from the bagel shop site
// Station item model to interact with the database
const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  // Name of the station
  name: {
    type: String,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: false,
  },
  x: {
    type: Number,
    required: false,
  },
  y: {
    type: Number,
    required: false,
  },
});

// Model allows direcet interaction with the database
module.exports = mongoose.model("Station", stationSchema);
