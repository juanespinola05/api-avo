const boom = require('@hapi/boom')

const validateSchema = (schema, space = 'body') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[space], { abortEarly: false })
    if (error) {
      const details = error.details.map(detail => detail.message)
      const message = new Intl.ListFormat('en-GB', {
        style: 'long',
        type: 'conjunction'
      }).format(details)
      return next(boom.badRequest(message))
    }
    next()
  }
}

module.exports = validateSchema
