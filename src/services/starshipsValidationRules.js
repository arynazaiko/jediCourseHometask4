const Joi = require("@hapi/joi");

const shema = Joi.object({
  name: Joi.string().required(),
  model: Joi.string().required(),
  starship_class: Joi.string().required(),
  manufacturer: Joi.string().required(),
  crew: Joi.string().required(),
  passengers: Joi.string().required(),
  beloved: Joi.boolean().allow(),
  id: Joi.number().allow(),
});

export default shema;
