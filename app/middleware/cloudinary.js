const cloudinary = require("cloudinary").v2;
cloudinary.config({
  secure: true,
});
cloudinary.config({
  cloud_name: "dgjgwdq5v",
  api_key: "166816762578921",
  api_secret: "F_a91lByefDYuu_TFJiKQT2zTUI",
});

module.exports = cloudinary;
