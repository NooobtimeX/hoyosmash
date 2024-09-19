const fs = require("fs");
const path = require("path");

// Define the directory containing the images
const directoryPath = path.join(__dirname, "public/genshin_impact");

// Read the files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  // Create a map to group files by character
  const characterFiles = {};

  files.forEach((file) => {
    // Assuming filenames start with the character's name
    const characterName = file.split(".")[0];
    if (!characterFiles[characterName]) {
      characterFiles[characterName] = [];
    }
    characterFiles[characterName].push(file);
  });

  // Create folders and move files
  Object.keys(characterFiles).forEach((characterName) => {
    const characterDir = path.join(directoryPath, characterName);

    // Create character directory
    fs.mkdirSync(characterDir, { recursive: true });

    // Move and rename images
    characterFiles[characterName].forEach((file, index) => {
      const oldPath = path.join(directoryPath, file);
      const newPath = path.join(characterDir, "1.webp");

      // Only rename and move the first image
      if (index === 0) {
        fs.renameSync(oldPath, newPath);
      } else {
        // If there are additional files, you can choose to skip or handle them
        fs.unlinkSync(oldPath); // Delete additional images
      }
    });
  });

  console.log("Images organized successfully!");
});
