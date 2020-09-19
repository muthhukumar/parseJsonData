const path = require("path");
const fs = require("fs");

const fallbackFilePathWriteFile = path.join("output", "result.json");

const writeToFile = (
  data,
  path = fallbackFilePathWriteFile
  //encoding = "utf8"
) => {
  const parsedData = JSON.stringify(data);
  try {
    fs.writeFileSync(path, parsedData, "utf8");
    return {
      success: true,
      message: "writing data to file successful",
    };
  } catch (err) {
    console.log(err);
    return { success: false, message: "something went wrong" };
  }
};

module.exports = writeToFile;
