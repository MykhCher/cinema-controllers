let movies = [
    {
        id: 1,
        title: 'Star Wars: Revenge of the Sith',
        directorId: 1,
        studioId: 1,
    },
    {
        id: 2,
        title: 'Lord of the Rings: The Return of the King',
        directorId: 2,
        studioId: 2,
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        directorId: 3,
        studioId: 3,
    }
];

class MoviesController {
    getMovies(req, res) {
        res.status(200).send(movies);
    }
    getMovieById(req, res) {
        const [movie] = movies.filter((movie) => movie.id === Number(req.params.movieId));
        res.status(movie ? 200 : 404)
            .send(movie || `movie id ${req.params.movieId} was not found!`);
    }
    createMovie(req, res) {
        const newMovie = req.body;
        movies.push(newMovie);
        res.status(201).send(newMovie);
    }
    updateMovie(req, res) {
        const {params: {movieId}, body} = req;
        let isUpdated = false;

        movies = movies.map((movie) => {
            if(movie.id === Number(movieId)) { 
                isUpdated = true;
                return body;
            } else { 
                return movie;
            }
        });
        res.status(isUpdated ? 202 : 404)
            .send(isUpdated ? body : `movie id ${movieId} was not found!`);
    }
    deleteMovie(req, res) {
        const id = req.params.movieId;
        let isDeleted = false;
        
        movies = movies.filter((movie) => {
            const match = movie.id !== Number(id);
            if (!match) isDeleted = true;
            return match;
        });
        res.status(isDeleted ? 200 : 404)
            .send(isDeleted ? `movie id ${id} deleted!` : `movie id ${id} was not found!`);
    }
}

module.exports = new MoviesController();