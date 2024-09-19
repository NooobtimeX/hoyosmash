const fs = require("fs");
const path = require("path");

// Define the folder path
const folderPath = "public/genshin_impact";

// Read the directory
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Create an array of objects with id and name
  const fileList = files.map((fileName, index) => ({
    id: index + 1,
    name: fileName,
  }));

  // Print the result
  console.log(JSON.stringify(fileList, null, 2));
});
