function printMoviesAsJSON (commandsArr) {
    let movies = [];

    for (let command of commandsArr) {
        if (command.startsWith("addMovie ")) {
            let movieName = command.substring(9); // The length of "addMovie " is 8,
                                                  // so the index of the next char is 9.
            movies.push({name: movieName});
        } else if (command.includes(" directedBy ")) {
            let [movieName, movieDirector] = command.split(" directedBy ");
            
            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.director = movieDirector;
                }
            });
        } else if (command.includes(" onDate ")) {
            let [movieName, movieDate] = command.split(" onDate ");
            
            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.date = movieDate;
                }
            });
        }
    }

    let moviesWithAllInfo = movies.filter(movie => movie.director && movie.date); // undefined is a falsy value

    for (let movie of moviesWithAllInfo) {
        console.log(JSON.stringify(movie));
    }
}

printMoviesAsJSON([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
]);

printMoviesAsJSON([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo"
]);