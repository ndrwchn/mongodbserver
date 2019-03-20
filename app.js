const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port', (process.env.PORT || 8080))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://10.57.24.123/globomantics')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  app.listen(app.get('port'), function () {
    console.log('API Server Listening on port ' + app.get('port') + '!')
  })
})
