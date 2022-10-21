const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Destination = new Schema(
  {
    country: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Destination', Destination)
