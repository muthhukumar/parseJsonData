const path = require("path");
const fs = require("fs");
const neatCsv = require("neat-csv");

const fallbackFilePathForRead = path.join("source", "data.csv");

const readFile = async (
  filePath = fallbackFilePathForRead,
  encoding = "utf8"
) => {
  try {
    let data = await neatCsv(fs.readFileSync(filePath, encoding));
    return {
      success: true,
      message:
        "Successfully read the data and converted to human readable format",
      data,
    };
  } catch (err) {
    console.log(err);
    return { success: false, message: "something went wrong" };
  }
};

module.exports = readFile;
