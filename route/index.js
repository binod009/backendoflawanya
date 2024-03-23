const express = require("express");

const app_routes = express();
const Auth_Routes = require("./auth.route");
const Event_Routes = require("./eventsection.route");
const Logo_Routes = require("./logo.route");
const Testomonial_Routes = require("./testomoial.route");
const Services_Routes = require("./service.route");
const Banner_Routes = require("./banner.route");
const Partner_Routes = require("./partner.route");
app_routes.use(Auth_Routes);
app_routes.use(Event_Routes);
app_routes.use(Logo_Routes);
app_routes.use(Testomonial_Routes);
app_routes.use(Banner_Routes);
app_routes.use(Services_Routes);
app_routes.use(Partner_Routes);
//exporting the app file to app.js
module.exports = app_routes;
