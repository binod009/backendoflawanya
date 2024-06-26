const EventService = require("../services/event.service");
const { dateFormat, timeFormat } = require("../services/format.service");

const cloudinary = require("../middleware/cloudinary");
const publicidTrimmer = require("../services/Trimmer.service");

class EventController {
  constructor() {
    this.event_svc = new EventService();
  }

  CreateEvent = async (req, res, next) => {
    let body = req.body;
    body.eventdate = dateFormat(req.body.eventdate);
    body.time = timeFormat(req.body.time);
    try {
      let result = cloudinary.uploader.upload(req.file.path, {
        folder: "programme",
      });
      body.public_id = publicidTrimmer(result.public_id);
      body.cloudinary_url = result.secure_url;
      this.event_svc.validateEvents(body);
      let data = await this.event_svc.createEvent(body);
      res.status(200).json({
        status: true,
        msg: "create Successfully",
        result: data,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  GetEvents = async (req, res, next) => {
    try {
      let result = await this.event_svc.getAllEvents();
      res.status(200).json({
        status: true,
        result: result,
        msg: "successfully retrived",
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  deleteEvent = async (req, res, next) => {
    try {
      let result = await this.event_svc.deleteEventById(
        req.params.eventid,
        req.params.pid
      );
      res.status(200).json({
        status: true,
        msg: "delete successfully",
        result: result,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = EventController;
