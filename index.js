console.log('twitter is starting');

var Twit = require('twit');
var config = require('./config');

// console.log(config);

var T = new Twit(config);
// var googleKey = gmapsKey.googleKey;
var params = {
    q: 'foodtruckfinde1',
    count: 15
}

let finData = [];
T.get('search/tweets', params, gotData);
function gotData(err, data, response){
    var tweets = data.statuses;
    let coords = [];
    let users = []; //able to get the data on here successfully!
    for(var i = 0; i < tweets.length; i++){
        // console.log(tweets[i].text, tweets[i].geo);
        // console.log(tweets[i].geo);
        if(tweets[i].coordinates){
            let userRaw = [];
            userRaw.push(tweets[i].user)
            let userArr = [userRaw[0].name, userRaw[0].screen_name, tweets[i].created_at, tweets[i].text, userRaw[0].profile_image_url];
            // console.log(user);
            let coordRaw = [];
            coordRaw.push(tweets[i].geo);
            // console.log(coordRaw[0].coordinates);
            let userCoord = coordRaw[0].coordinates;
            userArr.push(userCoord);
            // console.log(user);
            users.push(userArr);
        }

    }
    // console.log(users);
    // finData.push(users);
    // console.log(finData);
    // coords.forEach(coord => coord.coordinates.reverse());
    // coords.forEach(coord => console.log(coord.coordinates))
    // finData.forEach(usr => finData.push(usr.name))
    // coords.forEach(usr => finData.push(usr.screen_name))
    // coords.forEach(usr => finData.push(usr.profile_image_url))
    // coords.forEach(usr => finData.push(usr.coordinates))
    // console.log(coords);
    // console.log(finData);
    // console.log(finData);
}

// You can't tweet the same status via the console.. 
// I guess it's to prevent spam!
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

// setting up a user stream
// let stream = T.stream('user');
// //anytime someone follows our account
// stream.on('follow', followed);

// function followed(eventMsg){
//     let name = eventMsg.source.name;
//     let screenName = eventMsg.source.screen_name;
//     tweetIt('@' + screenName + ' thanks for following, we will share food truck locations with you!');
// }

// let streamData = [];

// stream.on('tweet', tweetEvent);
// function tweetEvent(eventMsg){
//     let replyTo = eventMsg.in_reply_to_screen_name;
//     let text = eventMsg.text;
//     let from = eventMsg.user.screen_name;
//     let tweetData = [eventMsg.user.name, eventMsg.user.screen_name, eventMsg.created_at, eventMsg.text, eventMsg.user.profile_image_url];
//     if(eventMsg.geo){
//         tweetData.push(eventMsg.geo.coordinates);
//     }
//     console.log(tweetData);
//     streamData.push(tweetData);
//     //********HERE*********
//     console.log(streamData);//streamData is where the tweet information will be stored, I need to export this to google maps now
//     console.log(replyTo + ' ' + from);
//     if(replyTo === 'foodtruckfinde1' ){
//         console.log("hello there, looks like we've got engagement");
//         // console.log(eventMsg);
//         let newTweet = '@' + from + ' thank you for signing up and sharing your food trucks location!';
//         tweetIt(newTweet);
//     }
// }

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
        console.log("hello there, looks like we've got engagement");
    }
}
