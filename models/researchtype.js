const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  researchType: { type: String, required: true }
})

const Researchtype = mongoose.model('Researchtype', userSchema)

module.exports = Researchtype
