const fs = require('fs');
const path = require('path');
// =====
const express = require('express');
// =====
const DirectorController = require('./controllers/directorController');
const StudioController = require('./controllers/studioController');
const MoviesController = require('./controllers/moviesController');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    console.log(`${req.method} ${req.url}`);

    fs.readFile(path.resolve('public', 'home.html'), (err, data) => {
        if (err) {
            res.status(404);
            throw err;
        }
        res.set('Content-Type', 'text/html').send(data);
    });
});

app.get('/directors', DirectorController.getDirectors);
app.get('/directors/:directorId', DirectorController.getDirectorById);
app.post('/directors/', DirectorController.createDirector);
app.put('/directors/:directorId', DirectorController.updateDirector);
app.delete('/directors/:directorId', DirectorController.deleteDirector);

app.get('/studios', StudioController.getStudios);
app.get('/studios/:studioId', StudioController.getStudioById);
app.post('/studios/', StudioController.createStudio);
app.put('/studios/:studioId', StudioController.updateStudio);
app.delete('/studios/:studioId', StudioController.deleteStudio);

app.get('/movies', MoviesController.getMovies);
app.get('/movies/:movieId', MoviesController.getMovieById);
app.post('/movies/', MoviesController.createMovie);
app.put('/movies/:movieId', MoviesController.updateMovie);
app.delete('/movies/:movieId', MoviesController.deleteMovie);


module.exports = app;