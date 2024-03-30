const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    time: String,
    eventdate: {
      type: Date,
      required: true,
    },
    public_id: { type: String, required: true },
    cloudinary_url: { type: String, required: true },
    key: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    autoIndex: true,
    timestamps: true,
  }
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;
