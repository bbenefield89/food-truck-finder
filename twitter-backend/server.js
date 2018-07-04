const express = require('express');
const cors = require('cors');
const Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

const port = 7001;
const server = express();

server.use(cors());
server.use(express.json());

//get tweets from twitter!
server.get('/tweets', (req, res) => {
    T.get('statuses/mentions_timeline')
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(404).json({error: err})
    })
})


server.listen(port, () => console.log(`Server Running on Port ${port}`));