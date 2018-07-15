const express = require('express');
const Tweet = require('./tweet.js');
const router = express.Router();
const mongoose = require('mongoose');

router
    .route('/')
        .get((req, res) => {
            Tweet.find()
            .then(res => {
                res.status(200).send(res)
            })
            .catch(err => res.status(404).json({err}))
        })
        .post((req, res) => {
            const {name, screenName, createdAt, text, profPic} = req.body;
            if (!name || !screenName || !createdAt || !text || !profPic){
                res.status(400).json({errMessage: 'Please ensure you provide all the tweet content'})
                return;
            }
            Tweet.create(req.body)
                .then(output => res.status(201).json(output))
                .catch(err => res.status(500).json({error: err.message}))
        })


module.exports = router;