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

const port = process.env.PORT || 9001;
mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost/tweets', {}, err => {
    if (err) console.log(err);
    console.log("Mongoose is connected to your db")
})

server.listen(port, () => {
    console.log(`\n===API is running on http://localhost:${port} ===\n`);
});


//************Twitter Server code */
/*

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

*/