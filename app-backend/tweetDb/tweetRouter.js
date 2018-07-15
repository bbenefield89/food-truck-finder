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


module.exports = router;