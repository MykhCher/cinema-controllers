const express = require('express');
// =====
const StudioController = require('../controllers/studioController');

const router = express.Router()

router.route('/')
    .get(StudioController.getStudios)
    .post(StudioController.createStudio);

router.route('/:studioId')
    .get(StudioController.getStudioById)
    .put(StudioController.updateStudio)
    .delete(StudioController.deleteStudio);

module.exports = router;