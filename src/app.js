const fs = require('fs');
const path = require('path');
// =====
const express = require('express');
// =====
const {
    getDirectors, 
    getDirectorById, 
    createDirector, 
    updateDirector, 
    deleteDirector 
} = require('./controllers/directorController');
const {
    getStudios, 
    getStudioById, 
    createStudio, 
    updateStudio, 
    deleteStudio 
} = require('./controllers/studioController');

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

app.get('/directors', getDirectors);
app.get('/directors/:directorId', getDirectorById);
app.post('/directors/', createDirector);
app.put('/directors/:directorId', updateDirector);
app.delete('/directors/:directorId', deleteDirector);

app.get('/studios', getStudios);
app.get('/studios/:studioId', getStudioById);
app.post('/studios/', createStudio);
app.put('/studios/:studioId', updateStudio);
app.delete('/studios/:studioId', deleteStudio);


module.exports = app;