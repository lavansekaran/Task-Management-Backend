const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
},
{
  timestamps: true,
}
);

userSchema.createAt = Date.now;
userSchema.updateAt = Date.now;

module.exports = mongoose.model('User', userSchema);
