const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  firebaseId: String,
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = { User };
