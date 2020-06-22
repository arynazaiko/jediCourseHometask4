const Joi = require("@hapi/joi");

const shema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  diameter: Joi.string(),
  rotation_period: Joi.string(),
  orbital_period: Joi.string(),
  gravity: Joi.string(),
  population: Joi.string(),
});

export default shema;
