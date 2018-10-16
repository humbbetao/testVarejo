const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/testVarejo')

// module.exports = mongoose.model('Messages', msgSchema)
