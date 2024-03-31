const PartnerService = require("../services/partner.Service.js");
const cloudinary = require("../middleware/cloudinary.js");
const publicidTrimmer = require("../services/Trimmer.service.js");
class PartnerController {
  constructor() {
    this.partner_svc = new PartnerService();
  }

  CreatePartner = async (req, res, next) => {
    let body = req.body;

    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "partner",
      });

      body.public_id = publicidTrimmer(result.public_id);
      body.cloudinary_url = result.secure_url;
      this.partner_svc.validatePartner(body);
      let response = await this.partner_svc.partnercreate(body);
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
