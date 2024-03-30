const Joi = require("joi");
const DbService = require("./db.service");
const partnerModel = require("../models/partner.model");
const cloudinary = require("../middleware/cloudinary");
class PartnerService extends DbService {
  validatePartner = (data) => {
    try {
      let partnerSchema = Joi.object({
        profile_img: Joi.string().required(),
        cloudinary_url: Joi.string().required(),
        key: Joi.string().required(),
      });
      let response = partnerSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };

  createPartner = async (data) => {
    try {
      let event_obj = new partnerModel(data);
      let res = await event_obj.save();
      return res;
    } catch (err) {
      throw err;
    }
  };

  deletePartnerById = async (id, pid) => {
    try {
      await partnerModel.findOneAndDelete({
        _id: id,
      });
      await cloudinary.uploader.destroy("partner/" + pid, { invalidate: true });
    } catch (err) {
      throw err;
    }
  };

  getPartner = async () => {
    try {
      let res = await partnerModel.find({});
      return res;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = PartnerService;
