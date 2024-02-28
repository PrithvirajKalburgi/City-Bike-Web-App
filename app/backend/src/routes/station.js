const express = require('express')
const router = express.Router()
const Stations = require('../models/station')

//route for all station items
router.get('/', async (req, res) => {
    try {
        const stations = await Stations.find()
        res.json(stations)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Getting one
router.get('/:id', getStation, (req, res) => {
    res.json(res.station)
})

module.exports = router