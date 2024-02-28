const express = require("express");
const router = express.Router();
const Journeys = require("../models/journey");

//route for all journey items
router.get("/", async (req, res) => {
  try {
    const journeys = await Journeys.find();
    res.json(journeys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", getJourney, (req, res) => {
  res.json(res.journey);
});

module.exports = router;
