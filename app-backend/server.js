require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();
const tweetRouter = require('./tweetDb/tweetRouter.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
    res.status(200).json({api: 'running'});
});

server.use('/api/tweets', tweetRouter);

mongoose.connect('mongodb://localhost:27017/tweets', {}, err => {
    if (err) console.log(err);
    console.log("Mongoose is connected to your db")
})

const port = 9001;
server.listen(port, () => {
    console.log(`\n===API is running on http://localhost:${port} ===\n`);
});