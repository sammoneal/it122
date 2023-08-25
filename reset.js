import Movie from "./models/movie.js";

const movies = [
    {
      title: "Assault on Precinct 13",
      year: "1976",
      runtime: 91,
      director: "John Carpenter",
      starring: "Austin Stoker",
    },
    {
      title: "Halloween",
      year: "1978",
      runtime: 91,
      director: "John Carpenter",
      starring: "Jamie Lee Curtis",
    },
    {
      title: "Escape from New York",
      year: "1981",
      runtime: 99,
      director: "John Carpenter",
      starring: "Kurt Russell",
    },
    {
      title: "The Thing",
      year: "1982",
      runtime: 109,
      director: "John Carpenter",
      starring: "Kurt Russell",
    },
    {
      title: "They Live",
      year: "1988",
      runtime: 94,
      director: "John Carpenter",
      starring: "Roddy Piper",
    }
];

Movie.find({})
    .lean()
    .then((movies) => {
      for (let movie in movies){
        console.log(movies[movie]._id)
      }
    });

//for (let movie in movies){
//Movie.create(movies[0]);
//};