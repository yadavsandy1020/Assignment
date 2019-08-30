const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

 
var params = {screen_name: 'nodejs'};
try{
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
        }else{
          console.log(error)
        }
      });
}catch(error){
    console.log(error)
}
