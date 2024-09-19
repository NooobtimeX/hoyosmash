const fs = require("fs");
const path = require("path");

// Path to the folder containing your .webp files
const folderPath = "./public/zenless_zone_zero";

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    // Check if the file is a .webp
    if (path.extname(file) === ".webp") {
      // Create the new file name: lowercase and replace spaces with underscores
      const newFileName = file.toLowerCase().replace(/\s+/g, "_");

      // Rename the file
      fs.rename(
        path.join(folderPath, file),
        path.join(folderPath, newFileName),
        (err) => {
          if (err) {
            console.error("Error renaming file:", err);
          } else {
            console.log(`Renamed: ${file} -> ${newFileName}`);
          }
        },
      );
    }
  });
});
