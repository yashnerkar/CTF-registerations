const mongoose = require("mongoose");

const userFormat = new mongoose.Schema({
    group: {
        type: String,
        required: true,
    },
    gmailFirstMember: {
        type: String,
        required: true
    },
    firstMember: {
        type: String,
        required: true
    },
    firstMemberInfo: {
        type: String,
        required: true
    },
    gmailSecondMember: {
        type: String,
    },
    secondMember: {
        type: String,
    },
    secondMemberInfo: {
        type: String,
    },
    gmailThirdMember: {
        type: String,
    },
    thirdMember: {
        type: String
    },
    thirdMemberInfo: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
});
const User = mongoose.model("GROUP", userFormat);
module.exports = User;