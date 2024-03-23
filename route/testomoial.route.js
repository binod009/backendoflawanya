const express = require("express");
const Auth = require("../app/middleware/auth");
const uploader = require("../app/middleware/uploader");
const TestomonialController = require("../app/controller/testomonial.controller");
const test_ctrl = new TestomonialController();
const app = express.Router();

app
  .route("/testomonial")
  .post(Auth, uploader.single("clientimage"), test_ctrl.createTestomonial)
  .get(Auth, test_ctrl.GetTestomonial);
app.route("/testomonial/:id").delete(Auth, test_ctrl.DeleteTestomonial);

module.exports = app;
