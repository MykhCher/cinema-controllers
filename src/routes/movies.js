const express = require('express');
// =====
const MoviesController = require('../controllers/moviesController');

const router = express.Router()

router.get('/', MoviesController.getMovies);
router.get('/:movieId', MoviesController.getMovieById);
router.post('/', MoviesController.createMovie);
router.put('/:movieId', MoviesController.updateMovie);
router.delete('/:movieId', MoviesController.deleteMovie);

module.exports = router;