const readFile = require("./lib/readFile");
const writeToFile = require("./lib/writeToFile");
const { filterData } = require("./lib/filterdata/index");
const { filterIndex } = require("./lib/filterdata/filterActions");

const {
  filterEmptyData,
  filterField,
} = require("./lib/filterdata/filterActionCreators");

const main = async () => {
  const { data } = await readFile();
  // Filter data by index
  filterIndex(data, [0, 12, 13, 20, 28, 24]);

  // Filter empty data in the sheet
  filterEmptyData(data, 2);

  // Filterdata by particular field
  const fieldsToFilter = [
    "Month 1 avg balance",
    "Month 2 avg balance",
    "Month 3 avg balance",
    "Month 4 avg balance",
    "Month 5 avg balance",
    "Month 6 avg balance",
    "Test case description",
    "Test case ID",
    "DOB (MM/DD/YYYY)",
    "CHEQUE RETURNS- insufficient funds(ISF)",
    "Expected result",
    "Actual result",
    "Comments",
  ];
  const res = filterData(data, [
    filterEmptyData(),
    filterField(fieldsToFilter),
  ]);
  writeToFile(res);
};

main();
