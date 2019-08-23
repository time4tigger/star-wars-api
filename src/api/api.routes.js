const bodyParser = require('body-parser');
const { Router } = require('express');

const peopleRoutes = require('./people/people.route');
const planetRoutes = require('./planets/planet.routes');

const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// --------- api path routes --------- //
router.use('/people', peopleRoutes);
router.use('/planets', planetRoutes);

module.exports = router;
