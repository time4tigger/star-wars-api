const CoreController = require('../core/core.controller');
const PeopleService = require('./people.service');

class PeopleController extends CoreController {
  static list({ query }, res, next) {
    return PeopleService
      .listPeople(query)
      .then(data => res.json(data))
      .catch(next);
  }
}

module.exports = PeopleController;
