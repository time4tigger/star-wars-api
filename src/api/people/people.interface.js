const sortOptions = ['name', 'height', 'mass'];

class PeopleInterface {
  constructor(data = [], sortBy = '') {
    this._sortBy = sortBy;
    this._data = data;
  }

  get data() {
    return this._getData();
  }

  _getData() {
    const sortBy = this._sortBy;
    if (sortOptions.indexOf(sortBy) === -1)
      return this._data;

    if (sortBy !== 'name')
      return this._data.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));

    return this._data.sort(PeopleInterface._sortByName);
  }

  static _sortByName(a, b) {
    const nameA = a.name;
    const nameB = b.name;

    if (nameA === nameB)
      return 0;

    return nameA > nameB ? 1 : -1;
  }
}

module.exports = PeopleInterface;
