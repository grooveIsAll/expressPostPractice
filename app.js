const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

const port = 7147;
app.listen(port);
console.log('Listening of port ', port);