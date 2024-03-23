const express = require("express");
const Auth = require("../app/middleware/auth");
const uploader = require("../app/middleware/uploader");
const PartnerController = require("../app/controller/partner.controller");
const partner_ctrl = new PartnerController();
const app = express.Router();
app
  .route("/partner")
  .post(Auth, uploader.single("image"), partner_ctrl.CreatePartner)
  .get(Auth, partner_ctrl.getAllPartner);

app.route("/partner/:id").delete(Auth, partner_ctrl.deletePartner);

module.exports = app;
