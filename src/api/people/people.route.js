const { Router } = require('express');

const PeopleController = require('./people.controller');

const router = Router();

router.get('/', PeopleController.list);

module.exports = router;
