const multer = require("multer");

const myStorage = multer.diskStorage({
  destination: (req, file, next) => {
    let path = "public/";
    next(null, path);
  },
  filename: (req, file, next) => {
    let unique_file = Date.now() + "-" + file.originalname;
    next(null, unique_file);
  },
});

const imageFilter = (req, file, next) => {
  let allowed = ["svg", "jpeg", "jpg", "bitmap", "png", "webp", "bmp"];
  let fileparts = file.originalname.split(".");
  let ext = fileparts.pop();
  if (allowed.includes(ext.toLowerCase())) {
    next(null, true); //passing true for acceptance for file if you want to reject pass false
  } else {
    next({ status: 400, msg: "Image file type not supported" });
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: {
    fieldSize: 5000000,
  },
});

module.exports = uploader;
