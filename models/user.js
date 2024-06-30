const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1. موديل المستخدمين (Users)
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  registrationDate: { type: Date, default: Date.now },
  userType: { type: String, enum: ['customer', 'admin'], default: 'customer' }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
