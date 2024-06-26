var movies = [
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
        res.status(200).send(movie);
    }
    createMovie(req, res) {
        const newMovie = req.body;
        movies.push({...newMovie});
        res.status(201).send(newMovie);
    }
    updateMovie(req, res) {
        const {params: {movieId}, body} = req;
        movies = movies.map((movie) => movie.id === Number(movieId) ? {...body} : movie);
        res.status(202).send(body);
    }
    deleteMovie(req, res) {
        movies = movies.filter((movie) => movie.id !== Number(req.params.movieId));
        res.status(200).send(`movie id ${req.params.movieId} deleted!`);
    }
}

module.exports = new MoviesController();