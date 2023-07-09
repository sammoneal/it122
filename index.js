// Express JS
import express from 'express';

// Initialize and configure
const app = express()
const port = 3000
app.set('view engine', 'ejs');

// Home route
app.get(['/','/home'], (req, res) => {
  res.render('home', req.query)
})

// About route
app.get('/about', (req, res) => {
  res.render('about', req.query)
})

// Undirected traffic gets the 404
app.all('*', (req, res) => {
  res.status(404).render('error404', req.query)
})

// Run app
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`)
})