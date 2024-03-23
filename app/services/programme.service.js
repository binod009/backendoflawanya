const serviceModel = require("../models/service.model");
const Joi = require("joi");

class ProgrammeService {
  programmeValidator = (data) => {
    try {
      let programSchema = Joi.object({
        servicename: Joi.string().required(),
        description: Joi.string().required(),
        key: Joi.string().required(),
      });

      let response = programSchema.validate(data);
      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (excp) {
      throw excp;
    }
  };

  createProgramme = async (data) => {
    try {
      let programme_obj = new serviceModel(data);
      let res = await programme_obj.save();
      return res;
    } catch (error) {
      throw error;
    }
  };

  getAllProgramme = async () => {
    try {
      return await serviceModel.find({});
    } catch (err) {
      throw err;
    }
  };

  deleteProgrammeById = async (id) => {
    try {
      let response = await serviceModel.findByIdAndDelete({
        _id: id,
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = ProgrammeService;
