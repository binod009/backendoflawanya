const Joi = require("joi");
const DbService = require("./db.service");
const partnerModel = require("../models/partner.model");
class PartnerService extends DbService {
  validatePartner = (data) => {
    try {
      let partnerSchema = Joi.object({
        image: Joi.string().empty().required(),
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

  deletePartnerById = async (id) => {
    try {
      return await partnerModel.findOneAndDelete({
        _id: id,
      });
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
