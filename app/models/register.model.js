const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    image: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
    },
    role: {
      type: String,
      enum: ["employee", "admin"],
    },
  },
  {
    Timestamp: true,
    autoIndex: true,
  }
);
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
