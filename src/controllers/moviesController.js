var movies = [
    {
        id: 1,
        title: 'Star Wars: Revenge of the Sith',
        movectorId: 1,
        studioId: 1,
    },
    {
        id: 2,
        title: 'Lord of the Rings: The Return of the King',
        movectorId: 2,
        studioId: 2,
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        movectorId: 3,
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
        movies.push({...newMovie});
        res.status(201).send(newMovie);
    }
    updateMovie(req, res) {
        const {params: {movieId}, body} = req;
        const [movieToUpdate] = movies.filter((mov) => mov.id === Number(movieId));
        if (!movieToUpdate) {
            return res.status(404).send(`movie id ${movieId} was not found!`)
        }
        movies = movies.map((movie) => movie.id === Number(movieId) ? {...body} : movie);
        res.status(202).send(body);
    }
    deleteMovie(req, res) {
        const id = req.params.movieId;
        const [movieToDelete] = movies.filter((mov) => mov.id === Number(id));
        if (!movieToDelete) {
            return res.status(404).send(`movie id ${id} was not found!`)
        }
        movies = movies.filter((movie) => movie.id !== Number(id));
        res.status(200).send(`movie id ${id} deleted!`);
    }
}

module.exports = new MoviesController();