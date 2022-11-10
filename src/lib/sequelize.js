const Sequelize = require('sequelize')
const { NODE_ENV, DB_CONNECTION_URL } = require('../config')
const setupModels = require('../db/models')

const isProduction = NODE_ENV === 'production'

const config = {
  dialect: 'postgres',
  logging: isProduction ? false : console.log
}

if (isProduction) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(DB_CONNECTION_URL, config)

setupModels(sequelize)

module.exports = sequelize
