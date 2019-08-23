const { SwapiApi } = require('../core/services');
const PeopleInterface = require('./people.interface');

class PeopleService {
  /**
   * @param {object} query
   * @param {string} [query.sortBy] An optional parameter to sort the list of people
   * @return {Promise<*>}
   */
  static async listPeople({ sortBy } = {}) {
    const people = await SwapiApi
      .getAll('people');

    return new PeopleInterface(people, sortBy).data;
  }
}

module.exports = PeopleService;
