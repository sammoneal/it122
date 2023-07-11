const data = {
    movies: [
        {
            title: 'Assault on Precinct 13',
            year: '1976',
            runtime: 91,
            director: 'John Carpenter',
            staring: 'Austin Stoker'
        },
        {
            title: 'Halloween',
            year: '1978',
            runtime: 91,
            director: 'John Carpenter',
            staring: 'Jamie Lee Curtis'
        },
        {
            title: 'Escape from New York',
            year: '1981',
            runtime: 99,
            director: 'John Carpenter',
            staring: 'Kurt Russell'
        },
        {
            title: 'The Thing',
            year: '1982',
            runtime: 109,
            director: 'John Carpenter',
            staring: 'Kurt Russell'
        },
        {
            title: 'They Live',
            year: '1988',
            runtime: 94,
            director: 'John Carpenter',
            staring: 'Roddy Piper'
        },
    ],
    getAll: function() {
        return this.movies;
    },
    getItem: function(title){
        let titles = [];
        for (let index = 0; index < this.movies.length; index++) {
            titles.push(this.movies[index].title.toLowerCase().replace(/\s/g, ""))
        }
        return this.movies[titles.indexOf(title)];
    }
};

export default data;