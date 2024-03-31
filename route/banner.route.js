const express = require("express");
const Auth = require("../app/middleware/auth");
const BannerController = require("../app/controller/banner.controller");
const banner_ctrl = new BannerController();
const uploader = require("../app/middleware/uploader");
const app = express.Router();

app
  .route("/banner")
  .get(banner_ctrl.GetAllBanner)
  .post(Auth, uploader.single("image"), banner_ctrl.createbanner);

app.route("/banner/:id").delete(Auth, banner_ctrl.deleteBanner);

module.exports = app;
