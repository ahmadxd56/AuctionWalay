const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//password hash before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

//generate Token for authentication 
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

//generating password reset token
userSchema.methods.getResetPasswordToken = async function () {

  // create random bytes
  const resetToken = crypto.randomBytes(32).toString("hex");

  //hashings and add to userSchema 
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000
  return resetToken

}

module.exports = mongoose.model("User", userSchema);