const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const User = require("../models/user");

const localStrategy = new LocalStrategy(
  { usernameField: "email" },
  async (email, password, done) => {
    //TODO: implementar try catch para capturar cualquier error aqui
    //Match user
    const user = await User.findOne({ email });
    if (!user) return done(null, false, { msg: "The email is not registered" });

    //Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false, { msg: "email/password invalid" });

    return done(null, user);
  }
);

const serializeUser = (user, done) => {
  done(null, user.id);
};

const deserializeUser = (id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(error => done(error, null));
};

module.exports = { localStrategy, serializeUser, deserializeUser };
