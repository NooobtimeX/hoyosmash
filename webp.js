const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Define input and output folder paths
const inputFolder = path.join(__dirname, "public/honkai_impact");
const outputFolder = path.join(__dirname, "public/honkai_impact");

// Ensure the output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Read all files in the input folder
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Error reading input folder:", err);
    return;
  }

  // Filter PNG files and convert each one to WebP
  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === ".png") {
      const inputFilePath = path.join(inputFolder, file);
      const outputFileName = `${path.basename(file, ".png")}.webp`;
      const outputFilePath = path.join(outputFolder, outputFileName);

      sharp(inputFilePath)
        .toFormat("webp")
        .toFile(outputFilePath)
        .then(() => {
          console.log(`Converted: ${file} -> ${outputFileName}`);
        })
        .catch((err) => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
