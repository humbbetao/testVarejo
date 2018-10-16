const List = require('./list')

List.methods(['get', 'post', 'put', 'delete', 'options'])
List.updateOptions({ new: true, runValidators: true })

module.exports = List

