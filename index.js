// Express JS
import express from "express";
import mongoose from "mongoose";
import Movie from "./models/movie.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Initialize and configure
const app = express();
const port = 3000;
app.set("view engine", "ejs");

//Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + "/static"));

// Home route
app.get(["/", "/home"], (req, res) => {
  Movie.find({}).then((movies) => {
    res.render("home", { movies: movies });
  });
});

// Query route
app.get("/detail", (req, res) => {
  Movie.findOne({ title: req.query.title }).then((movie) => {
    res.render("detail", { movie: movie });
  });
});

// Dyanmic route
app.get("/:id", (req, res) => {
  const queryId = new mongoose.Types.ObjectId(req.params.id);
  Movie.findById(queryId).then((movie) => {
    res.render("detail", { movie: movie });
  });
});

// All other traffic gets 404
app.all("*", (req, res) => {
  res.status(404).render("error404");
});

// Run app
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`);
});
