const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");
const Api = process.env.DATABASE;

const port = process.env.PORT || 8000;
dotenv.config({ path: '.env' });

mongoose.connect(Api);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use(require(path.join(__dirname, "routes/user.js")));


if (process.env.NODE_ENV !== 'production') {
    app.use(express.static("client/build"));
}




app.listen(port, () => {
    console.log(`Server is Listening on the ${port}...`);
});