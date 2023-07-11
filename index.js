// Express JS
import express from 'express';
import data from './data.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Initialize and configure
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

//Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/static'));

// Home route
app.get(['/','/home'], (req, res) => {
  res.render('home', {movies: data.getAll()});
})

// Query route
app.get('/detail', (req, res) => {
  if (data.getItem(req.query.title)){
    res.render('detail', {movie: data.getItem(req.query.title)});
  }
  else {
    res.status(404).render('error404');
  }
})

// Dyanmic route
app.get('/:id', (req, res) => {
  if (data.get(req.params.id)){
    res.render('detail', {movie: data.get(req.params.id)});
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