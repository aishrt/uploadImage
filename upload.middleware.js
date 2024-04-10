const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { dirname } = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const currentDir = dirname(__filename);
    const dir = path.join(currentDir, "./uploads");
    console.log(dir, "dir-----------------------");
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    } catch (error) {
      console.log(error);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const extentions = file.originalname.toString().split(".");
    const extention = extentions[extentions.length - 1];
    const filename = `${Date.now()}.${extention}`;
    console.log(filename, "----------- filenamefilename ----------");
    cb(null, filename);
  },
});

module.exports = multer({ storage });
