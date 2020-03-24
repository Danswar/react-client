const router = require("express").Router();
const bcrypt = require("bcryptjs");

const {
  authLocal,
  authJWT,
  authGoogle,
  authFacebook
} = require("../middlewares");
const signToken = require("../config/signToken");

const User = require("../models/user");

/**
 * @route   POST api/signup
 * @desc    register a new user
 * @access  Public
 */
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  //TODO: fields validation
  try {
    //Check for existing user
    const user = await User.findOne({ email });
    if (user) throw Error("User alredy exists");

    //Password encrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Persist the user
    const savedUser = await new User({
      username,
      email,
      password: hashPassword
    }).save();

    //Send the response
    const token = await signToken(savedUser);
    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/signin
 * @desc    return token to user already registered
 * @access  Public
 */
router.post("/signin", authLocal, async (req, res) => {
  const token = await signToken(req.user);

  res.status(200).json({ token });
});

/**
 * @route   POST auth/google
 * @desc    authenticate user by google id_token
 * @access  Private
 */
router.post("/auth/google", authGoogle, async (req, res) => {
  const token = await signToken(req.user);

  res.status(200).json({ token });
});

/**
 * @route   POST auth/facebook
 * @desc    authenticate user by facebook
 * @access  Private
 */
router.post("/auth/facebook", authFacebook, async (req, res) => {
  const token = await signToken(req.user);

  res.status(200).json({ token });
});

/**
 * @route   GET api/profile
 * @desc    Get information to token owner
 * @access  Private
 */
router.get("/profile", authJWT, async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
