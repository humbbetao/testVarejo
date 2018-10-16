module.exports = function (req, res, next) {
  res.header('Acess-Control-allow-Origin', '*')
  res.header('Acess-Control-allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
  res.header('Acess-Control-allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}
