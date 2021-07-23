const Joi = require("joi");

const schema = Joi.object({
  userId: Joi.number().required(),
  name: Joi.string().required(),
});

module.exports = schema;
