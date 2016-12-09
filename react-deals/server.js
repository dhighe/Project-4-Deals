const express   = require('express');
const logger    = require('morgan');
const path      = require('path');
const PORT      = process.argv[2] || process.env.PORT || 3000;
const app       = express();

app.set(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

// dist refers the the dist folder we created
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log('Welcome to port: ', PORT));
