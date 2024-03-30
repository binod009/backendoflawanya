const mongoose = require("mongoose");

const testoSchema = new mongoose.Schema(
  {
    clientname: String,
    public_id: { type: String, required: true },
    cloudinary_url: { type: String, required: true },
    clientreview: { type: String, required: true },
  },
  {
    autoIndex: true,
    timestamps: true,
  }
);

const testoModel = mongoose.model("testomonial", testoSchema);

module.exports = testoModel;
