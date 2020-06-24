const Joi = require("@hapi/joi");

const shema = Joi.object({
  name: Joi.string().required(),
  diameter: Joi.string().required(),
  rotation_period: Joi.string().required(),
  orbital_period: Joi.string().required(),
  gravity: Joi.string().required(),
  population: Joi.string().required(),
  beloved: Joi.boolean().allow(),
  id: Joi.number().allow(),
});

export default shema;
