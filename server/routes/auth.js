const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const User = require("../models/user");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  //TODO: fields validation

  try {
    //Check for existing user
    const user = await User.findOne({ email });
    if (user) throw Error("User alredy exists");

    //Password encrypt
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hashPassword = await bcrypt.hash(password, salt);
    if (!hashPassword) throw Error("Something went wrong hashing the password");

    //Persist the user
    const newUser = new User({
      username,
      email,
      password: hashPassword
    });

    const savedUser = await newUser.save();

    //TODO: crear funcion para firmar tokens
    //Send the response
    const token = JWT.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600
    });

    res.status(200).json({
      token,
      user: {
        username: savedUser.username,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//TODO: mover el middleware a otro lugar
//TODO: crear funcion para firmar tokens
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  async (req, res) => {
    const token = await JWT.sign({ id: req.user._id }, JWT_SECRET, {
      expiresIn: 3600
    });

    res.status(200).json({
      token,
      user: {
        username: req.user.username,
        email: req.user.email
      }
    });
  }
);

module.exports = router;
