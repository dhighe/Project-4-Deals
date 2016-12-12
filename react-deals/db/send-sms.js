const twilio = require('twilio');

const ACCOUNT_SID = process.env.TEST_SID;
const AUTH = process.env.TEST_AUTH;
// SDK Version: 2.x 3.x
// Twilio Credentials
const accountSid = ACCOUNT_SID;
const authToken = AUTH;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+19129802870',
    from: '15005550006',
    body: 'This will eventually be a test...',
  })
  .then((message) => console.log(message.sid));
