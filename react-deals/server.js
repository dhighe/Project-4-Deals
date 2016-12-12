const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser')
const PORT        = process.argv[2] || process.env.PORT || 3000;
const app         = express();

app.set(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json())
// dist refers the the dist folder we created
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.use('/api/products', require('./routes/products.js'))

app.listen(PORT, () => console.log('Welcome to port: ', PORT));
