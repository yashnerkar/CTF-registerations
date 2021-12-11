const mongoose = require("mongoose");
const userData = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  solution: [{
    answer: {
      type: String
    },
    time: {
      type: String
    },
  }],
},{timestamps:true});
const Data = mongoose.model("DATA", userData);
module.exports = Data;
