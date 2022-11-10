const { Avo, avoSchema } = require('./avo.model')

function setupModels (sequelize) {
  Avo.init(avoSchema, Avo.config(sequelize))
}

module.exports = setupModels
