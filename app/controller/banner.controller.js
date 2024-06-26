const publicidTrimmer = require("../services/Trimmer.service");
const BannerService = require("../services/banner.service");
const cloudinary = require("../middleware/cloudinary");
class bannerController {
  constructor() {
    this.banner_svc = new BannerService();
  }

  createbanner = async (req, res, next) => {
    let body = req.body;
    try {
      let result = await cloudinary.uploader.upload(req.file.path, {
        folder: "herocarousel",
      });
      body.public_id = publicidTrimmer(result.public_id);
      body.cloudinary_url = result.secure_url;
      this.banner_svc.validateBanner(body);
      let data = await this.banner_svc.bannercreate(body);
      if (true) {
        res.status(200).json({
          status: true,
          msg: "created successfully",
          result: data,
        });
      }
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  GetAllBanner = async (req, res, next) => {
    try {
      let bannerdoc = await this.banner_svc.getBanner();
      res.status(200).json({
        status: true,
        result: bannerdoc,
        msg: "successfully retrived",
      });
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };

  deleteBanner = async (req, res, next) => {
    try {
      let result = await this.banner_svc.deleteBannerById(
        req.params.id,
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

module.exports = bannerController;
