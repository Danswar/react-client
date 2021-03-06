const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  picture: {
    type: String
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
