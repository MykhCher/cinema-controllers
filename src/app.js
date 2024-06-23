const fs = require('fs');
const path = require('path');
// =====
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(`${req.method} ${req.url}`);

    fs.readFile(path.resolve('public', 'home.html'), (err, data) => {
        if (err) {
            res.status(404);
            throw err;
        }
        res.set('Content-Type', 'text/html').send(data);
    });
})

module.exports = app;