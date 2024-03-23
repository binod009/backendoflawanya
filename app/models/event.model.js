const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventimage: String,
    time: String,
    eventdate: {
      type: Date,
      required: true,
    },
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
