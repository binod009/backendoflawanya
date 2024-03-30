const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    bannername: {
      type: String,
      required: true,
    },
    public_id: { type: String, required: true },
    cloudinary_url: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "inactive"],
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

const bannerModel = mongoose.model("banner", bannerSchema);
module.exports = bannerModel;
