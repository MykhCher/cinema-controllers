const fs = require('fs');
const path = require('path');
// =====
const express = require('express');
// =====
const movieRouter = require('./routes/movies');
const studioRouter = require('./routes/studios');
const directorRouter = require('./routes/directors');

const app = express();

app.use(require('./logging'));
app.use(express.json());
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    fs.readFile(path.resolve('public', 'home.html'), (err, data) => {
        if (err) {
            res.status(404);
            throw err;
        }
        res.set('Content-Type', 'text/html').send(data);
    });
});

app.use('/directors', directorRouter);
app.use('/studios', studioRouter);
app.use('/movies', movieRouter);


module.exports = app;