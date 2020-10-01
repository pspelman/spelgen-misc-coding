/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures - helper function 
var addTweet = function(newTweet) { // self-documenting name - here comes the object 
    var username = newTweet.user; // random element from users array - one of 4 users 
    streams.users[username].push(newTweet); // an object is now being put into an array - the user's stream - streams.users[username] - 1/4 will go into each user 
    streams.home.push(newTweet); // same tweet pushed into the home stream - all tweets will go there
};


// utility function
var randomElement = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// random tweet generator - 5 arrays of descriptive names 
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function() {
    return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function() {
    var tweet = {}; // tweets are objects with three properties 
    tweet.user = randomElement(users); // random element from users array (global variable)
    tweet.message = randomMessage(); // random message - .join an array with an empty space -  of five words
    tweet.created_at = new Date(); // timestamp 
    addTweet(tweet); // passing an input into this function - now read code 
};

for (var i = 0; i < 10; i++) { // first action 
    generateRandomTweet(); // generates 10 tweets 
}

var scheduleNextTweet = function() {
    generateRandomTweet(); // adds new tweet to new stream 
    setTimeout(scheduleNextTweet, Math.random() * 1500); // delays execution of provided function 
}; // RECURSION!!! 
scheduleNextTweet(); // controls continuous stream of tweets 

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message) {
    if (!visitor) {
        throw new Error('set the global visitor property!');
    }
    if (!streams.users[visitor]) {
        streams.users[visitor] = [];
    }
    var tweet = {};
    tweet.user = visitor;
    tweet.message = message;
    tweet.created_at = new Date();
    addTweet(tweet);
};