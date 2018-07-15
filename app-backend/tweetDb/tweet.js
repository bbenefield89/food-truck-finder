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
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    profPic: {
        type: URL
    }
});

module.exports = mongoose.model('Tweet', Tweet);