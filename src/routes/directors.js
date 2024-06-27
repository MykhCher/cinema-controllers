const express = require('express');
// =====
const DirectorController = require('../controllers/directorController');

const router = express.Router()

router.route('/')
    .get(DirectorController.getDirectors)
    .post(DirectorController.createDirector);

router.route('/:directorId')
    .get(DirectorController.getDirectorById)
    .put(DirectorController.updateDirector)
    .delete(DirectorController.deleteDirector);

module.exports = router;