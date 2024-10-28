const fs = require("fs");
const path = require("path");

// Define the folder path
const folderPath = "public/honkai_impact";
const outputFilePath = "fileList.js"; // Define the output file path

// Helper function to format the file name
function formatFileName(fileName) {
  return fileName
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\.\w+$/, "") // Remove the file extension for display
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

// Read the directory
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Create an array of objects with id, formatted name, and img array with just the file name
  const fileList = files.map((fileName, index) => ({
    id: index + 1,
    name: formatFileName(fileName),
    img: [fileName],
  }));

  // Prepare the file content as JavaScript code
  const fileContent = `const fileList = ${JSON.stringify(fileList, null, 2)};\nconsole.log(fileList);`;

  // Write the file content to fileList.js
  fs.writeFile(outputFilePath, fileContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`fileList.js has been created with the file list.`);
  });
});
