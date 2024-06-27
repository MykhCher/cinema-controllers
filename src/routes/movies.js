const express = require('express');
// =====
const MoviesController = require('../controllers/moviesController');

const router = express.Router()

router.route('/')
    .get(MoviesController.getMovies)
    .post(MoviesController.createMovie);

router.route('/:movieId')
    .get(MoviesController.getMovieById)
    .put(MoviesController.updateMovie)
    .delete(MoviesController.deleteMovie);

module.exports = router;