require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser')
const twilio      = require('twilio');
const PORT        = process.argv[2] || process.env.PORT || 3000;
const app         = express();

app.set(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json())
app.use('/api/products', require('./routes/products.js'))
// dist refers the the dist folder we created


app.listen(PORT, () => console.log('Welcome to port: ', PORT));









































app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
