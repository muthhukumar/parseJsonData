const { FILTER_EMPTY_DATA, FILTER_INDEX, FILTER_FIELD } = require("./filters");

const filterIndex = (data) => ({
  type: FILTER_INDEX,
  payload: data,
});

const filterField = (fields) => ({ type: FILTER_FIELD, payload: fields });

const filterEmptyData = () => ({ type: FILTER_EMPTY_DATA });

module.exports = {
  filterIndex,
  filterField,
  filterEmptyData,
};
