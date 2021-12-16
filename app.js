require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");
// dotenv.config({ path: __dirname + '/.env' });
const url = process.env.DATABASE_URL;
// console.log(url); //
// const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");

try {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(require(path.join(__dirname, "routes/user.js")));



// app.use(express.static('client/build'));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


app.listen(process.env.PORT || 8000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});