const boom = require('@hapi/boom')
const { models } = require('../lib/sequelize')

const getAvoController = async (req, res, next) => {
  try {
    const avos = await models.Avo.findAll()
    res.status(200).json({
      length: avos.length,
      data: avos.map(avo => avo.dataValues)
    })
  } catch (error) {
    next(error)
  }
}

const getAvoByIdController = async (req, res, next) => {
  const { params: { id } } = req
  try {
    const avo = await models.Avo.findByPk(id)
    if (!avo) {
      throw boom.notFound('Avocado not found')
    }
    res.status(200).json({
      data: avo.dataValues
    })
  } catch (error) {
    next(error)
  }
}

const postAvoController = async (req, res, next) => {
  const { body } = req
  try {
    const newAvo = await models.Avo.create(body)
    console.log(newAvo)
    res.status(200).json({
      ok: true
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAvoController,
  getAvoByIdController,
  postAvoController
}
