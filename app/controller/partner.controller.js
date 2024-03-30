const PartnerService = require("../services/partner.Service.js");
const cloudinary = require("../middleware/cloudinary.js");
const uploader = require("../middleware/uploader.js");
class PartnerController {
  constructor() {
    this.partner_svc = new PartnerService();
  }

  CreatePartner = async (req, res, next) => {
    let body = req.body;
    try {
      let path = req.file.path;
      const result = await cloudinary.uploader.upload(path, {
        folder: "partner",
      });
      body.public_id= result.public_id;
      body.cloudinary_url = result.cloudinary_url;
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
  deletePartner = async (req, res, next) => {
    try {
      console.log(req.params.pid);
      await this.partner_svc.deletePartnerById(req.params.id, req.params.pid);
      res.status(200).json({
        status: true,
        msg: "delete successfully",
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = PartnerController;
