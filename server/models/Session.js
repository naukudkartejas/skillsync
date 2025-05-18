const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: String,
  dateTime: Date,
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Session', sessionSchema);