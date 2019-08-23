const CoreController = require('../core/core.controller');
const PlanetService = require('./planet.service');

class PlanetController extends CoreController {
  static list({ query }, res, next) {
    return PlanetService
      .listPlanets()
      .then(data => res.json(data))
      .catch(next);
  }
}

module.exports = PlanetController;
