const Joi = require("@hapi/joi");

const shema = Joi.object({
  name: Joi.string().required(),
  height: Joi.string().required(),
  mass: Joi.string().required(),
  gender: Joi.string().required(),
  birth_year: Joi.string().required(),
  beloved: Joi.boolean().allow(),
  id: Joi.number().allow(),
});

export default shema;
