const express = require('express');
const router = express.Router();
const Journey = require('../models/Journey');

// Get request
router.get('/', async (req,res) =>{
    try {
        const journeys = await Journey.find();
        res.json(journeys);
    } catch(err){
        res.json({message:err});
    }
});

// Get specific
router.get('/:journeyId', async (req,res) => {
    try {
        const journey = await Journey.findbyId(req.params.journeyId);
        res.json(journey)
    } catch(err){
        res.json({message:err});
    }
});

// Post request
router.post('/', async (req,res) => {
    const journey = new Journey({
        Departure: req.body.Departure,
        Return: req.body.Return,
        DepartureStationid: req.body.DepartureStationid,
        DepartureStationName: req.body.DepartureStationName,
        ReturnStationid: req.body.ReturnStationid,
        ReturnStationName: req.body.ReturnStationName,
        CoveredDistanceMeters: req.body.CoveredDistanceMeters,
        DurationSec: req.body.DurationSec
    });
    try{
        const savedJourney = await journey.save();
        res.json(savedJourney);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router