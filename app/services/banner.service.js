const DbService = require("./db.service");
const Joi = require("joi");
const cloudinary = require("../middleware/cloudinary");
const bannerModel = require("../models/banner.model");
class BannerService extends DbService {
  validateBanner = (data) => {
    try {
      let bannerSchema = Joi.object({
        bannername: Joi.string().required(),
        public_id: Joi.string().required(),
        cloudinary_url: Joi.string().required(),
        status: Joi.string().required(),
        key: Joi.string().required(),
      });
      let response = bannerSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };

  createBanner = async (data, file) => {
    try {
      let banner_obj = new bannerModel(data);

      return banner_obj.save();
    } catch (err) {
      throw err;
    }
  };

  getBanner = async () => {
    try {
      return await bannerModel.find({});
    } catch (err) {
      throw err;
    }
  };

  deleteBannerById = async (bannerid, pid) => {
    try {
      await cloudinary.uploader.destroy("herocarousel/" + pid, {
        invalidate: true,
      });
      let res = await bannerModel.findByIdAndDelete({
        _id: bannerid,
      });
      return res;
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = BannerService;
