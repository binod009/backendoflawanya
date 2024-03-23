const PartnerService = require("../services/partner.Service.js");

class PartnerController {
  constructor() {
    this.partner_svc = new PartnerService();
  }

  CreatePartner = async (req, res, next) => {
    let body = req.body;
    try {
      if (req.file) {
        body.image = req.file.filename;
      }
      this.partner_svc.validatePartner(body);
      let response = await this.partner_svc.createPartner(body);
      if (response) {
        res.status(200).json({
          status: true,
          msg: "successfully created",
          result: response,
        });
      }
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
  getAllPartner = async (req, res, next) => {
    try {
      let result = await this.partner_svc.getPartner();
      res.status(200).json({
        status: true,
        msg: "retrived successfully",
        result: result,
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
  deletePartner = (req, res, next) => {
    try {
      let result = this.partner_svc.deletePartnerById(req.params.id);
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

module.exports = PartnerController;
