const countOccurance = require("../util/index");

const filterEmptyData = (data, minSize = 3) => {
  if (!Array.isArray(data)) {
    throw new Error("Invalid data passed. Pass only Array values");
  }
  let result = data.filter((value) => {
    const values = Object.entries(value).map((array) => array[1]);
    return countOccurance(values, "") <= minSize ? true : false;
  });
  return result;
};

const filterIndex = (data, index) => {
  let result = [];
  if (Array.isArray(index)) {
    result = data.filter((value, i) => !index.includes(i));
  } else {
    throw new Error("Index should be an array");
  }
  return result;
};

const filterField = (data, payload) => {
  let result = data.map((value) => {
    let values = Object.entries(value).map((array) => array[0]);
    values = values.filter((data) => !payload.includes(data));
    let res = Object.entries(values).map((data) => ({
      [data[1]]: value[data[1].toString()],
    }));
    let data = {};
    res.forEach((value) => {
      data = {
        ...data,
        ...value,
      };
    });
    return data;
  });
  return result;
};

module.exports = {
  filterEmptyData,
  filterField,
  filterIndex,
};
