const ProgrammeService = require("../services/programme.service");

class ProgrammeController {
  constructor() {
    this.programme_svc = new ProgrammeService();
  }

  CreateNewProgramme = async (req, res, next) => {
    let body = req.body;
    try {
      this.programme_svc.programmeValidator(body);
      let result = await this.programme_svc.createProgramme(body);
      res.status(200).json({
        status: true,
        msg: "create successfully",
        result: result,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  getProgramme = async (req, res, next) => {
    try {
      let result = await this.programme_svc.getAllProgramme();
      res.status(200).json({
        status: true,
        msg: "retrive successfully",
        result: result,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  deleteProgramme = async (req, res, next) => {
    try {
      let result = await this.programme_svc.deleteProgrammeById(req.params.id);
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

module.exports = ProgrammeController;
