const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  transactionDate: { type: Date, required: true },
  transactionType: { type: String, required: true },
  feedback: { type: String, default: 'Good job :-)' },
  description: { type: String, required: true },
  charge: { type: Number, default: 0 },
  deposit: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now },
  requestType: { type: mongoose.SchemaTypes.ObjectId, ref: 'Requesttype' }
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
