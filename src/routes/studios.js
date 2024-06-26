const express = require('express');
// =====
const StudioController = require('../controllers/studioController');

const router = express.Router()

router.get('/', StudioController.getStudios);
router.get('/:studioId', StudioController.getStudioById);
router.post('/', StudioController.createStudio);
router.put('/:studioId', StudioController.updateStudio);
router.delete('/:studioId', StudioController.deleteStudio);

module.exports = router;