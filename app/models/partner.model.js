const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    profile_img: {
      type: String,
      required: true,
    },

    cloudinary_url: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  {
    Timestamp: true,
    autoIndex: true,
  }
);

const partnerModel = mongoose.model("partner", partnerSchema);
module.exports = partnerModel;
