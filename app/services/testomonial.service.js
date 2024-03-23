const testoModel = require("../models/testo.model");
const DbService = require("./db.service");
const Joi = require("joi");

class TestomonialService extends DbService {
  validateTestomonial = (data) => {
    try {
      let testoSchema = Joi.object({
        clientname: Joi.string().required(),
        clientimage: Joi.string().required(),
        clientreview: Joi.string().required(),
        key: Joi.string().required(),
      });
      let response = testoSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };

  createTestomonial = async (data) => {
    try {
      let testo_obj = new testoModel(data);
      let res = await testo_obj.save();
      return res;
    } catch (err) {
      throw err;
    }
  };

  getAllTestomonial = async () => {
    try {
      let result = await testoModel.find({});
      return result;
    } catch (err) {
      throw err;
    }
  };

  deleteTestomonialById = async (id) => {
    try {
      let result = await testoModel.findByIdAndDelete({
        _id: id,
      });
      return result;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TestomonialService;
