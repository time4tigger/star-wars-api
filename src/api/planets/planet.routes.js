const { Router } = require('express');

const PlanetController = require('./planet.controller');

const router = Router();

router.get('/', PlanetController.list);

module.exports = router;
