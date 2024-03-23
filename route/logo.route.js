const express = require("express");
const app = express();

app.post(
  "/logo",
  async(req, res, next) => {
    req._id = "uaid9292902k";
    next();
  },
  (req, res, next) => {
    res.status(200).json({
      frommiddleware: req._id,
    });
  }
);

app.get("/logo", (req, res) => {
  res.json({
    messaage: "here is your logo data",
    result: [],
  });
});

module.exports = app;
