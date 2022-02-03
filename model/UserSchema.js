const mongoose = require("mongoose");
const validator = require("validator");

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
    collegeFirstMember: {
        type: String,
        required: true
    },
    departmentOfFirstMember: {
        type: String,
        required: true
    },
    yearOfFirstMember: {
        type: String,
        required: true
    },
    firstMemberInfo: {
        type: String,
        required: true
    },
    phoneFirstMember: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    gmailSecondMember: {
        type: String,
    },
    secondMember: {
        type: String,
    },
    collegeSecondMember: {
        type: String,
    },
    departmentOfSecondMember: {
        type: String,
    },
    yearOfSecondMember: {
        type: String,
    },
    secondMemberInfo: {
        type: String,
    },
    phoneSecondMember: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    }
});
const User = mongoose.model("GROUP", userFormat);
module.exports = User;