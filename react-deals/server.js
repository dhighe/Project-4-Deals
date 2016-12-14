require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser')
// const twilio      = require('twilio')(process.env.TEST_SID, process.env.TEST_AUTH);
const twilio      = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const PORT        = process.argv[2] || process.env.PORT || 3000;
const app         = express();

app.set(logger('dev'));
app.use(bodyParser.json())
app.use('/api/users', require('./routes/users.js'))
app.use('/api/products', require('./routes/products.js'))
app.use('/api/db/products', require('./routes/dbproducts.js'))

app.get('/api/twilio', (req, res) => {
  twilio.messages.create({
    to: process.env.PHONE,
    // from: process.env.TEST_PHONE,
    from: process.env.TWILIO_PHONE,
    body: 'Thank you for signing up to my application'
  }, (err, data) => {
    if(err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => console.log('Welcome to port: ', PORT));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
