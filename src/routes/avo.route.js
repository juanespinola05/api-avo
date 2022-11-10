const express = require('express')
const { getAvoController, postAvoController, getAvoByIdController } = require('../controllers/avo.controller.js')
const validateSchema = require('../middlewares/validateSchema.js')
const { postAvoSchema, getAvoByIdSchema } = require('../schemas/avo.schema.js')
const router = express.Router()

router.get('/', getAvoController)

router.get('/:id', validateSchema(getAvoByIdSchema, 'params'), getAvoByIdController)

router.post('/', validateSchema(postAvoSchema), postAvoController)

module.exports = router
