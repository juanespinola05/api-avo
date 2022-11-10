const { DB_CONNECTION_URL } = require('../config')

module.exports = {
  development: {
    url: DB_CONNECTION_URL,
    dialect: 'postgres'
  },
  production: {
    url: DB_CONNECTION_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
