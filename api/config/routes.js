const express = require('express')

module.exports = function (server) {
  // API routes
  const router = express.Router()
  server.use('/api', router)

  // LIST Routes
  const listService = require('../api/list/listService')
  listService.register(router, '/list')

}
