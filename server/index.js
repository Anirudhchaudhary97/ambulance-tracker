const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

const jwt = require("jsonwebtoken");
const cors = require('cors')
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors())

//Database connection
const dbConnect = require("./src/db/connection");
const { createUser } = require("./src/controllers/user");
dbConnect();

// defining schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["driver", "user"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

app.post("/register", async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = hashPassword;

  const phoneExist = await User.exists({ phoneNumber: req.body.phoneNumber });
  const emailExist = await User.exists({ email: req.body.email });

  if (phoneExist) {
    return res.json({ msg: "Phone Number is taken" });
  } else if (emailExist) {
    return res.json({ msg: "Email is taken" });
  }
  // if user doesnot exit then create new user
  await User.create(req.body);
  res.json({ msg: "User Register" });
});

app.post("/login", async (req, res) => {
  // 1. check if user is register by checking their phoneNumber
  const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

  if (user) {
    // 2. if user exist then comapre the password
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (isMatched) {
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber },process.env.SECRECT_KEY);

      res.json({ msg: "Authorized user", token });
    } else {
      res.json({ msg: "Invalid Password" });
    }
  } else {
    res.json({ msg: "PhoneNumber doesnot exist" });
  }
});

app.get("/users", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adduser", createUser);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`hello Example app listening on port ${port}`);
});
