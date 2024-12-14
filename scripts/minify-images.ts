import sharp from "sharp";
import fsExtra from "fs-extra";
import * as path from "node:path";
import { glob } from "glob";

const cwd = process.cwd();
const inputDir = path.join(cwd, "images");
const outputDir = path.join(cwd, "public", "images");
const inputDirRelative = path.relative(cwd, inputDir);
const outputDirRelative = path.relative(cwd, outputDir);
await fsExtra.ensureDir(outputDir);

const ignoreExtensions = [".svg"];

const removeExistingImages = () => {
  console.log(`Deleting existing images from ${outputDirRelative}`);
  return new Promise((res, rej) => {
    try {
      if (!fsExtra.existsSync(outputDir)) {
        console.log(`No minified images found in ${outputDirRelative}`);
        res("No minified images found");
      } else {
        fsExtra.rmSync(outputDir, { recursive: true });
        console.log(`Deleted images from ${outputDirRelative} successfully`);
        res("Deletion success");
      }
    } catch (err) {
      console.log(`Failed to delete images from ${outputDirRelative}`);
      rej(err);
    }
  });
};

const processImages = async (files: string[]) => {
  try {
    console.log(`Processing images from ${inputDirRelative}`);
    for (const file of files) {
      const extname = path.extname(file);
      if (ignoreExtensions.includes(extname.toLowerCase())) {
        const input = await fsExtra.readFile(path.join(inputDir, file), "utf8");
        const destPath = path.join(outputDir, file);
        await fsExtra.ensureFile(destPath);
        await fsExtra.writeFile(destPath, input, "utf8");
        console.log(
          "✅",
          "Moved",
          path.join(inputDirRelative, file),
          "to",
          path.join(outputDirRelative, file),
        );
      } else {
        const outputPath = path.join(outputDir, file.replace(extname, ".webp"));
        await fsExtra.ensureDir(path.dirname(outputPath));
        await sharp(path.join(inputDir, file))
          .webp({ quality: 60 })
          .toFile(outputPath);
        console.log(
          "✅",
          "Converted",
          path.join(inputDirRelative, file),
          "to",
          path.join(outputDirRelative, file.replace(extname, ".webp")),
        );
      }
    }
  } catch (error) {
    console.error(`Error processing images from ${inputDirRelative}:`, error);
  }
};

await removeExistingImages();

const files = glob.sync("**/*.{png,svg,gif,webp,jpeg,jpg,avif}", {
  cwd: inputDir,
});

if (files.length === 0) {
  console.log(`No images found in ${inputDirRelative}`);
} else {
  await processImages(files);
}
