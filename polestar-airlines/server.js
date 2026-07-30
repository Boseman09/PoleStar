const express = require('express');
const path = require('path');
const airports = require('./data/airports.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const OFFERS = [
  { title: 'Early Bird Sale', text: 'Domestic fares from ₹1,999 — book 30 days ahead.' },
  { title: 'Weekend Getaway', text: 'Flat 15% off Fri–Sun flights this month.' },
  { title: 'Student Fare', text: 'Extra 10% off with a valid student ID.' },
  { title: 'Pole Star Rewards', text: 'Join now, earn double miles on your first flight.' }
];

app.get('/', (req, res) => {
  res.render('index', { airports, offers: OFFERS });
});

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.get('/signup', (req, res) => {
  res.render('signup', { error: null });
});

// Demo handlers only — wire these up to real auth/db logic later.
app.post('/login', (req, res) => {
  res.redirect('/');
});

app.post('/signup', (req, res) => {
  res.redirect('/login');
});

app.listen(PORT, () => {
  console.log(`Pole Star is airborne at http://localhost:${PORT}`);
});
