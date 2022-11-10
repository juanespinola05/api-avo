const Joi = require('joi')

const postAvoSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  description: Joi.string()

})

const getAvoByIdSchema = Joi.object({
  id: Joi.number().integer().required()
})

module.exports = {
  postAvoSchema,
  getAvoByIdSchema
}
