const express = require("express");
const Auth = require("../app/middleware/auth");
const ProgrammeController = require("../app/controller/programme.controller");
let programme_ctrl = new ProgrammeController();
const app = express.Router();

app
  .route("/programme")
  .post(Auth, programme_ctrl.CreateNewProgramme)
  .get(Auth, programme_ctrl.getProgramme);

app.route("/programme/:id").delete(Auth, programme_ctrl.deleteProgramme);

module.exports = app;

//username:lawanya
//password:C5LMo5FH1oif6HyO
//mongodb+srv://<username>:<password>@cluster0.8brv6gn.mongodb.net/
