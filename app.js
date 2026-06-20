const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let x = 2;
  res.send('Works on my machine.');
});

module.exports = app;
