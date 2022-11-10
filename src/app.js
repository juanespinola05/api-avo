const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const boomErrorHandler = require('./middlewares/boomErrorHandler')
const logError = require('./middlewares/logError')
const setupRoutes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

setupRoutes(app)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})

app.use(logError)
app.use(boomErrorHandler)

module.exports = app
