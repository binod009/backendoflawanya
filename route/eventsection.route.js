const express = require("express");
const EventController = require("../app/controller/event.controller");
const Auth = require("../app/middleware/auth");
const uploader = require("../app/middleware/uploader");
const Event_ctrl = new EventController();
const app = express.Router();

app
  .route("/event")
  .post(Auth, uploader.single("eventimage"), Event_ctrl.CreateEvent)
  .get(Auth, Event_ctrl.GetEvents);

app.route("/:eventid").delete(Auth, Event_ctrl.deleteEvent);

module.exports = app;
