const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    public_id: {
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
