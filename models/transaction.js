const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  transactionDate: { type: Date, required: true },
  transactionType: { type: String, required: false },
  feedback: { type: String, default: 'no feedback yet.' },
  description: { type: String, required: true },
  charge: { type: Number, default: 0 },
  deposit: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now },
  researchType: { type: Schema.Types.ObjectId, ref: 'Researchtype', required: true }
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
