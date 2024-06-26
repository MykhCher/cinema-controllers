const express = require('express');
// =====
const DirectorController = require('../controllers/directorController');

const router = express.Router()

router.get('/', DirectorController.getDirectors);
router.get('/:movieId', DirectorController.getDirectorById);
router.post('/', DirectorController.createDirector);
router.put('/:movieId', DirectorController.updateDirector);
router.delete('/:movieId', DirectorController.deleteDirector);

module.exports = router;