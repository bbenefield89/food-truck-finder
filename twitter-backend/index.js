console.log('twitter is starting');

var Twit = require('twit');
var config = require('./config');

console.log(config);

var T = new Twit(config);

var params = {
    q: 'bobaepapa',
    count: 10
}

// T.get('search/tweets', params, gotData);
// function gotData(err, data, response){
//     var tweets = data.statuses;
//     for(var i = 0; i < tweets.length; i++){
//         console.log(tweets[i].text);
//         console.log(tweets[i].coordinates);
//     }
// }

//You can't tweet the same status via the console.. 
//I guess it's to prevent spam!
let tweet = {
    status: 'tweeting from the console via twitter api'
}
T.post('statuses/update', tweet, tweeted);
function tweeted(err, data, response){
    if(err){
        console.log('something went wrong, try again');
    } else {
        console.log('it worked!');
    }
};

//setting up a user stream
let stream = T.stream('user');
//anytime someone follows our account
stream.on('follow', followed);

function followed(eventMsg){
    let name = eventMsg.source.name;
    let screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ' thanks for following, we will share food truck locations with you!');
}
function tweetIt(txt){
    let tweet = {
        status: txt
    }
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
        if(err){
            console.log('something went wrong, try again');
        } else {
            console.log('it worked!');
        }
    }
}