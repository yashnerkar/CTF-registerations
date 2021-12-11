const mongoose = require("mongoose");

const userFormat = new mongoose.Schema({
  group: {
    type: String,
    required: true,
  },
  gmail:{
    type:String,
    required : true
  },
  firstMember:{
    type:String,
    required:true
  },
  secondMember:{
    type:String
  },
  thirdMember:{
    type:String
  },
  password: {
    type: String,
    required: true,
  }
});
const User = mongoose.model("GROUP", userFormat);
module.exports = User;