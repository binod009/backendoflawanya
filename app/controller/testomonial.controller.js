const TestomonialService = require("../../app/services/testomonial.service");
const cloudinary = require("../middleware/cloudinary");
class TestomonialController {
  constructor() {
    this.testo_svc = new TestomonialService();
  }

  createTestomonial = async (req, res, next) => {
    try {
      let body = req.body;
      if (req.file) {
        body.clientimage = req.file.filename;
      }
      let result = await cloudinary.uploader.upload(req.file.path, {
        folder: "testomonial",
      });
      body.public_id = result.public_id;
      body.cloudinary_url = result.secure_url;
      this.testo_svc.validateTestomonial(body);
      let data = await this.testo_svc.createTestomonial(body);
      res.status(200).json({
        status: true,
        msg: "created successfully",
        result: data,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  GetTestomonial = async (req, res, next) => {
    try {
      let result = await this.testo_svc.getAllTestomonial();
      res.status(200).json({
        status: true,
        msg: "successfully retrived",
        result: result,
      });
    } catch (excp) {
      next({ status: 401, msg: excp });
    }
  };

  DeleteTestomonial = async (req, res, next) => {
    try {
      let result = await this.testo_svc.deleteTestomonialById(
        req.params.id,
        req.params.pid
      );
      if (result) {
        res.status(200).json({
          status: true,
          msg: "successfully delete",
          result: result,
        });
      } else {
        next({ status: 404, msg: "data not found !" });
      }
    } catch (excp) {
      next({ status: 401, msg: excp });
    }
  };
}

module.exports = TestomonialController;
