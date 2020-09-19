const countOccurance = (arrayOfValues, val) => {
  return arrayOfValues.reduce((prevValue, current) => {
    return current === val ? prevValue + 1 : prevValue;
  }, 0);
};

module.exports = countOccurance;
