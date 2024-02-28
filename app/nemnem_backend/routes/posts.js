const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// Submit post
router.post('/', async (req,res) => {
    const post = new Post({
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
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//Get specific post
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){res.json({message: err})};
});

// Delete post
router.delete('/:postId', async (req,res) => {
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId });
        res.json(removedPost);
    } catch(err){res.json({message: err});
    }
});

// Update post
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId }, { $set: {Departure: req.body.Departure}});
        res.json(updatedPost);
    } catch(err){res.json({message: err});
    }
});

module.exports = router;
