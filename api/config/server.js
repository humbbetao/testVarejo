const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = process.env.PORT || 3000

const mongoose = require('mongoose')
const allowCors = require('./cors')

mongoose.Promise = global.Promise
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
  console.log('Message RESTful API server started on: ' + port)
})

module.exports = server

