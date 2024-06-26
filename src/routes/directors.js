const express = require('express');
// =====
const DirectorController = require('../controllers/directorController');

const router = express.Router()

router.get('/', DirectorController.getDirectors);
router.get('/:directorId', DirectorController.getDirectorById);
router.post('/', DirectorController.createDirector);
router.put('/:directorId', DirectorController.updateDirector);
router.delete('/:directorId', DirectorController.deleteDirector);

module.exports = router;