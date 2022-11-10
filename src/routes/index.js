const express = require('express')
const avoRouter = require('./avo.route.js')

const router = express.Router()

function setupRoutes (app) {
  app.use('/api', router)
  router.use('/avo', avoRouter)
}

module.exports = setupRoutes
