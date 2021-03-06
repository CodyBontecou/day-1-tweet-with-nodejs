const twitter = require('twitter-lite')
require('dotenv').config()

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
}

const client = new twitter(config)

client
  .post('statuses/update', { status: '' })
  .then(result => {
    console.log('You successfully tweeted this : "' + result.text + '"')
  })
  .catch(console.error)
