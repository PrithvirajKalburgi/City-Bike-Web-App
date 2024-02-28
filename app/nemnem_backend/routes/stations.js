const express = require('express');
const router = express.Router();
const Journey = require('../models/Station');
const Station = require('../models/Station');

// Get request
router.get('/', async (req,res) =>{
    try {
        const stations = await Station.find();
        res.json(stations);
    } catch(err){
        res.json({message:err});
    }
});

// Get specific
router.get('/:stationId', async (req,res) => {
    try {
        const station = await Station.findById(req.params.stationId);
        res.json(stations)
    } catch(err){
        res.json({message:err});
    }
});

module.exports = router;
