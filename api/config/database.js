const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/Varejo')

// module.exports = mongoose.model('Messages', msgSchema)
