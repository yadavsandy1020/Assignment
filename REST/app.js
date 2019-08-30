const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'MlP41tZZmczyN6Tba6ESzu89W',
  consumer_secret: 'UzakjyPG0ymiOi1zFkmdYADD6FmkueTL3m9XoeziFtv1kBATd3',
  access_token_key: '2568133188-F51py9GjktAq0Cf1MKysaJ4oum4XwwsqozhdnKE',
  access_token_secret: 'lqbE2UKYxvvmKR6kP3b7BjkSjHdQy44t09rxhPAXM1mU7'
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
