const TestomonialService = require("../../app/services/testomonial.service");
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
      console.log("frombackend", body);
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
      let result = await this.testo_svc.deleteTestomonialById(req.params.id);
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
