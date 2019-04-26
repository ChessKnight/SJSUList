const mongoose = require('mongoose')
const crypto = require("crypto");
const dotenv = require('dotenv')
dotenv.config();   


const user = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },

  studentId: {
    type: Number
  },

  studentMajor:{
    type: String
  },

  email: {
    type: String
  },

  hashed_password: {
    type: String,
    trim: true
  },

  created: {
    type: Date,
    default: Date.now
  },
  updated: Date


});


const secret = process.env.SECRET

//convert the password into hash password by  using mongoose virtual attribute 
//https://mongoosejs.com/docs/2.7.x/docs/virtuals.html

user.virtual("password")
  .set(function (password) {
    this.new_password= password;
    this.secret = secret
    this.hashed_password = this.encryptInHash(password);
  })
  .get(function () {
    return this.new_password;
  });


user.methods = {
  passwordValidation: function (userPassword) {
    if(userPassword)  return this.encryptInHash(userPassword) === this.hashed_password;
  },
  //encrypting password using npm crypto buil-in package 
  //https://nodejs.org/api/crypto.html#crypto_crypto

  encryptInHash: function (password) {
    if (password) {
      const hash = crypto.createHmac("sha256", secret)
                         .update(password)
                         .digest("hex");
      return hash;
    } else {
      return "";
    }
  }
};
 

module.exports = mongoose.model("User", user);