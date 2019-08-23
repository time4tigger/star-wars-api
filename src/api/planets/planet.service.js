const { SwapiApi } = require('../core/services');
const PeopleService = require('../people/people.service');

class PlanetService {
  static async listPlanets() {
    const planets = await SwapiApi.getAll('planets');
    const peoplePerPlanet = await PlanetService.getPeopleByPlanet();

    return planets
      .map(planet => {
        const people = peoplePerPlanet.get(planet.url);
        if (people)
          planet.residents = people;

        return planet;
      });
  }

  static async getPeopleByPlanet() {
    const peoplePerWorldMap = new Map();
    const people = await PeopleService.listPeople();

    people
      .forEach(({ homeworld, name }) => {
        if (!homeworld)
          return;

        if (!peoplePerWorldMap.has(homeworld))
          peoplePerWorldMap.set(homeworld, []);

        const planetPeople = peoplePerWorldMap.get(homeworld);
        planetPeople.push(name);
      });

    return peoplePerWorldMap;
  }

  static mapPeopleToPlanet() {

  }
}

module.exports = PlanetService;
