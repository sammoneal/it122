import mongoose from "mongoose";
import dotenv from "dotenv";
const { Schema } = mongoose;

// credentials
dotenv.config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// connection string
const uri = `mongodb+srv://${username}:${password}@cluster0.mvh8ig5.mongodb.net/?retryWrites=true&w=majority`;

// connect to itprojects database
mongoose.connect(uri, {
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
export default Movie;
