const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Register
const registerUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashPassword;

    const phoneExist = await User.exists({ phoneNumber: req.body.phoneNumber });
    const emailExist = await User.exists({ email: req.body.email });

    if (phoneExist) {
      return res.status(409).json({ msg: "Phone Number is taken" });
    } else if (emailExist) {
      return res.status(409).json({ msg: "Email is taken" });
    }
    // if user doesnot exit then create new user
    await User.create(req.body);
    res.json({ msg: "User Register" });
  } catch (error) {
    console.log(error);
  }
};

//login
const loginUser = async (req, res) => {
  try {
    // 1. check if user is register by checking their phoneNumber
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

    if (user) {
      // 2. if user exist then comapre the password
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (isMatched) {
        const token = jwt.sign(
          { phoneNumber: req.body.phoneNumber },
          process.env.SECRECT_KEY
        );

        res.json({ msg: "Authorized user", token, user });
      } else {
        res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      res.status(401).json({ msg: "PhoneNumber doesnot exist" });
    }
  } catch (error) {}
};

const findAllUser = async (req, res) => {
  const list = await User.find();
  res.send(list);
};

module.exports = { registerUser, loginUser, findAllUser };
