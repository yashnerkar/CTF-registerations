require('dotenv').config();
const dotenv = require('dotenv');
const express = require("express");
const User = require("../model/UserSchema");
const Data = require("../model/DataSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const saltRounds = 10;



router.post("/register", async(req, res) => {
    const { group, gmail, firstMember, secondMember, thirdMember, password } =
    req.body;
    try {
        const passwordHash = bcrypt.hashSync(password, saltRounds);
        const check = await User.find({ group: group });

        if (check.length) {
            return res.json(
                "#E52B50:white:This TeamName has already been taken, please enter new TeamName"
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
        console.log("hello");
        res.json("greenyellow:black:Registeration Successful. Please, check your mail for your TeamName and Password");

        const options = `
     <h2>Hello<strong> ${group}</strong></h2>
     <p>Your Team has been successfully registered. Here's your TeamName and Password for the competition.</p>
     <p>TeamName:  <strong><u>${group}</u></strong></p>
     <p>Password:  <strong><u>${password}</u></strong></p>
      <p>Stay tuned for further updates.</p>
    `;
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.PASSWORD,
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
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
});
router.get("/site-admin", async(req, res) => {
    const data = await Data.find();
    res.json(data);
});
module.exports = router;