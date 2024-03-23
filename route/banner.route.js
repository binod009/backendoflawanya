const express = require("express");
const Auth = require("../app/middleware/auth");
const uploader = require("../app/middleware/uploader");
const bannerController = require("../app/controller/banner.controller");

let banner_ctrl = new bannerController();
const app = express.Router();

app
  .route("/banner")
  .get(Auth, banner_ctrl.GetAllBanner)
  .post(Auth, uploader.single("image"), banner_ctrl.bannerUpload);

app.route("/banner/:id").delete(Auth, banner_ctrl.deleteBanner);

module.exports = app;
