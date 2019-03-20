const mongoose = require('mongoose')
const Schema = mongoose.Schema

let researchtypeSchema = new Schema({
  researchType: { type: String, required: true }
})

const Researchtype = mongoose.model('Researchtype', researchtypeSchema)

module.exports = Researchtype
