// Express JS
import express from 'express';
import data from './data.js';

// Initialize and configure
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// Home route
app.get(['/','/home'], (req, res) => {
  res.render('home', {movies: data.getAll()});
})

// About route
app.get('/about', (req, res) => {
  res.render('about');
})

//Dynamic route
app.get('/:id', (req, res) => {
  if (data.get(req.params.id)){
    res.render('id', {movie: data.get(req.params.id)});
  }
  else {
    res.status(404).render('error404');
  }
})

// All other traffic gets 404
app.all('*', (req, res) => {
  res.status(404).render('error404');
})

// Run app
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`);
})