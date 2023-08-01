// Express JS
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Movie from "./models/movie.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Initialize and configure
const app = express();
const port = 3000;
app.set("view engine", "ejs");

// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + "/static"));

// Cors
app.use("/api", cors());

// HTML routes

// Home route
app.get(["/", "/home"], (req, res) => {
  Movie.find({})
    .then((movies) => {
      res.render("home", { movies: movies });
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// Query route
app.get("/detail", (req, res) => {
  Movie.findOne({ title: req.query.title })
    .then((movie) => {
      res.render("detail", { movie: movie });
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// Dyanmic route
app.get("/:id", (req, res) => {
  const queryId = new mongoose.Types.ObjectId(req.params.id);
  Movie.findById(queryId)
    .then((movie) => {
      res.render("detail", { movie: movie });
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// API routes

// All movies
app.get("/api/movies", (req, res) => {
  Movie.find({})
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// Return movie
app.get("/api/movies/:id", (req, res) => {
  const queryId = new mongoose.Types.ObjectId(req.params.id);
  Movie.findById(queryId)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// Update movie with provided values
app.post("/api/movies/:id", (req, res) => {
  const queryId = new mongoose.Types.ObjectId(req.params.id);
  Movie.findByIdAndUpdate(queryId, req.query)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.status(500).send("Database Error");
    });
});

// Delete movie
app.post("/api/movies/delete", (req, res) => {
  const queryId = new mongoose.Types.ObjectId(req.query.id);
  Movie.findByIdAndDelete(queryId)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.status(500).send("Database Error");
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
