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

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['How did Obama', 'Why did Trump', 'Where did your cousin', 'Why did you', 'When did your dad', 'How did Hillary', 'Why did the cat', 'When did your friend', 'How productively did your boss', 'How efficiently did your mother', 'In what manner did you', 'Where did the wizard', 'How did you', 'Where did the ninja', 'How did a seedy old man'];
var verbs = ['download', 'interface', 'deploy', 'develop', 'build', 'invent', 'experience', 'navigate', 'aid', 'enjoy', 'engineer', 'install', 'debug', 'delegate', 'automate', 'formulate', 'systematize', 'overhaul', 'compute'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat?', 'koolaid?', 'system?', 'city?', 'worm?', 'cloud?', 'potato?', 'money?', 'way of life?', 'belief system?', 'security system?', 'bad decision?', 'future?', 'life?', 'pony?', 'mind?'];
var tags = ['#techlife', '#burningman', '#sf', '#but only i know how', '#for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '#woke', '#namaste', '#Kobe', '#Bravo 6'];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  if(!streams.users[visitor]) {
    streams.users[visitor] = [];
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
