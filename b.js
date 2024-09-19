const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageDir = "./public/honkai_star_rail"; // Input folder
const outputDir = "./public/cropped_images"; // Output folder

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const cropImage = async (imagePath, fileName) => {
  const outputImagePath = path.join(outputDir, fileName); // Save cropped image in output folder

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    const size = Math.min(metadata.width, metadata.height);

    // Crop to square
    await image
      .extract({
        left: Math.floor((metadata.width - size) / 2),
        top: Math.floor((metadata.height - size) / 2),
        width: size,
        height: size,
      })
      .toFile(outputImagePath);

    console.log(`Cropped: ${outputImagePath}`);
  } catch (err) {
    console.error(`Error cropping ${imagePath}:`, err);
  }
};

fs.readdir(imageDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const filePath = path.join(imageDir, file);
    cropImage(filePath, file)
      .then(() => console.log(`Processed: ${file}`))
      .catch((err) => console.error(`Error processing ${file}:`, err));
  });
});
