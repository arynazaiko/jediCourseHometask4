const Joi = require("@hapi/joi");

const shema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  model: Joi.string(),
  starship_class: Joi.string(),
  manufacturer: Joi.string(),
  crew: Joi.string(),
  passengers: Joi.string(),
});

export default shema;
