const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Tweet = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    screenName: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    profPic: {
        type: String,
        required: true
    },
    coordinates: {
        type: [Number, Number],
        required: false,
        index: '2d'
    }
});

module.exports = mongoose.model('Tweet', Tweet);