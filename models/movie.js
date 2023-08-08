import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectionString } from "../credentials.js";
const { Schema } = mongoose;

// connect to itprojects database
mongoose.connect(connectionString, {
  dbName: "itprojects",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// movie schema
const movieSchema = new Schema({
  title: { type: String, required: true },
  year: String,
  runtime: Number,
  director: String,
  starring: String,
});

//export
const Movie = mongoose.model("movie", movieSchema);
export {Movie};
