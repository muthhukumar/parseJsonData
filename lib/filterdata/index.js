const { FILTER_EMPTY_DATA, FILTER_INDEX, FILTER_FIELD } = require("./filters");
const {
  filterField,
  filterIndex,
  filterEmptyData,
} = require("./filterActions");

const filterData = (source, filters) => {
  let data = source;
  for (let i = 0; i < filters.length; i++) {
    switch (filters[i].type) {
      case FILTER_INDEX: {
        const payload = filters[i].payload;
        data = filterIndex(data, payload);
        break;
      }
      case FILTER_FIELD: {
        const payload = filters[i].payload;
        data = filterField(data, payload);
        break;
      }
      case FILTER_EMPTY_DATA: {
        data = filterEmptyData(data);
        break;
      }
    }
  }
  return data;
};

module.exports = {
  filterData,
};
