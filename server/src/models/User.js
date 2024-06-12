

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
    enum: ["driver", "user","admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;