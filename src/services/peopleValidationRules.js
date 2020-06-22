const Joi = require("@hapi/joi");

const shema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  height: Joi.string(),
  mass: Joi.string(),
  gender: Joi.string(),
  birth_year: Joi.string(),
});

export default shema;
