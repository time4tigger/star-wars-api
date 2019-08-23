const { isArray, isObject } = require('lodash');
const request = require('request');

const { swapiApi } = require('../core.constants');

const { parse: jsonParse } = JSON;

class SwapiApi {
  static get(path, pageNumber = 1) {
    return new Promise((ok, fail) => {
      const options = {
        method: 'GET',
        url: `${swapiApi}/${path}`,
        qs: { page: pageNumber },
      };

      request(options, (err, response, body = '') => {
        if (err)
          return fail(err);

        try {
          const data = jsonParse(body);
          return ok(data);
        }
        catch (e) {
          return fail(new Error('Error parsing data'));
        }
      });
    });
  }

  static async getAll(path) {
    let firstPageData;

    try {
      firstPageData = await SwapiApi.get(path);
    }
    catch(err)
    {
      return Promise.resolve(err);
    }

    if (!isObject(firstPageData) || !isArray(firstPageData.results))
      throw new Error(`Error retrieving data for ${path}`);

    const { count, results } = firstPageData;
    const data = [...results];
    const MAX_RESULTS_PER_PAGE = 10;
    // use Math.floor since we already got the first page
    const pageCount = Math.floor(count / MAX_RESULTS_PER_PAGE);

    const requestPageMap = (v, i) => SwapiApi.get(path, i + 2);
    const requestPageReducer = (arr, { results = []} = {}) => {
      arr.push(...results);
      return arr;
    };

    const requestPromises = Array
      .from({ length: pageCount }, requestPageMap);

    return await Promise
      .all(requestPromises)
      .then(promisesResults => promisesResults.reduce(requestPageReducer, data));
  }
}

module.exports = SwapiApi;
