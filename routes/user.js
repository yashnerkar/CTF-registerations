const express = require("express");
const User = require("../model/UserSchema");
const Data = require("../model/DataSchema");
const router = express.Router();
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const saltRounds = 10;

router.post("/register", async (req, res) => {
    const { group, gmail, firstMember, secondMember, thirdMember, password } =
      req.body;
    try {
      const passwordHash = bcrypt.hashSync(password, saltRounds);
      const check = await User.find({ group: group });
      if (check.length) {
        return res.json(
          "danger:This username has already been taken, please enter new username"
        );
      }
      const response = await new User({
        group,
        gmail,
        firstMember,
        secondMember,
        thirdMember,
        password: passwordHash,
      });
      await response.save();
      res.json("success:This data has been stored successfully");
      const options = `
     <h2>Hello<strong> ${group}</strong><br>Your team is successfully registered. Here's your username and password for the competition.</h2>
     <p>Username: <strong><u>${group}</u></strong></p>
        <p>Password:<strong><u>${password}</u></strong></p>
        <h2>Stay tuned for further updates.</h2>
    `;
      let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: "hellboyk723@gmail.com",
          pass: "Yash1235#",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      let info = await transporter.sendMail({
        from: '"CSI-DMCE"<hellboyk723@gmail.com>',
        to: gmail,
        subject: "CTF-Registeration Successful ✔",
        text: "HAHAHHAHHHAHH",
        html: options,
      });
      
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/admin", async (req, res) => {
    const data = await Data.find();
    res.json(data);
  });
  module.exports = router;