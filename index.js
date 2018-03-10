var Twit = require('twit');
var request = require('request');

// Defines variable T to initialize the Twit library
var T = new Twit({
    consumer_key:         'AAA',
    consumer_secret:      'AAA',
    access_token:         'ZZZ',
    access_token_secret:  'ZZZ'
  })
  
  // set const
  const url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=692375&format=text&lang=en"
  
  function getQuote (callback) {
      request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body);
        callback(body); 
      });
  }
  
  function postTweet(tweet) {
      console.log(tweet);
      T.post('statuses/update', { status: tweet }, function(err, data, response) {
        console.log(data);
      })
  }
  
  getQuote(postTweet)
  