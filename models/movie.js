import mongoose from "mongoose";
import dotenv from "dotenv";
const { Schema } = mongoose;

// credentials
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

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
export {Movie};
