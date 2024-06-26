const express = require('express');
// =====
const StudioController = require('../controllers/studioController');

const router = express.Router()

router.get('/', StudioController.getStudios);
router.get('/:movieId', StudioController.getStudioById);
router.post('/', StudioController.createStudio);
router.put('/:movieId', StudioController.updateStudio);
router.delete('/:movieId', StudioController.deleteStudio);

module.exports = router;