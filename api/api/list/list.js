const restful = require('node-restful')

const mongoose = restful.mongoose

const ImageSchema = mongoose.Schema({
  type: String,
  data: Buffer
})
const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  oldPrice: { type: String, required: true },
  newPrice: { type: String, required: true }
  // images: { type: [ImageSchema], default: [] }
})

module.exports = restful.model('List', listSchema)

