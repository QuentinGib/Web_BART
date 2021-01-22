const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    secret:{
      type: String,
      required: true,
      unique: true 
    }
  });


const User = mongoose.model("User",userSchema);
module.exports = User;
