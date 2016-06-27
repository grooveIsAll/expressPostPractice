const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const campgrounds = [
  { name: 'Camp Snoopy', image: 'https://farm7.staticflickr.com/6103/6333668591_90e7c2bc72.jpg' },
  { name: 'Camp Scooby', image: 'https://farm4.staticflickr.com/3446/3801715614_f9713f7211.jpg' },
  { name: 'Camp Santa\'s Little Helper', image: 'https://farm8.staticflickr.com/7512/15558076393_8c1d4b9cf8.jpg' }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', { campgrounds });
});

app.post('/campgrounds', function(req, res) {
  let name = req.body.name;
  let image = req.body.image;
  campgrounds.push({ name, image });
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new');
});

const port = 7147;
app.listen(port);
console.log('Listening of port ', port);