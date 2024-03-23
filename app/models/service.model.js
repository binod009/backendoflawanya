const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    servicename: {
      type: String,
      required: true,
    },
    description: {
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

const serviceModel = mongoose.model("Programme", serviceSchema);
module.exports = serviceModel;
