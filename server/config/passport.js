const FacebookTokenStrategy = require("passport-facebook-token");
const GoogleTokenStrategy = require("passport-google-id-token");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const {
  JWT_SECRET,
  GOOGLE_CLIENT_ID,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_SECRET
} = require("../config/keys");

module.exports = passport => {
  //
  //
  //-- Estrategia para autenciar con access_token de Facebook
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_SECRET
      },
      async (accessToken, refreshToken, profile, done) => {
        let { email, name, id } = profile._json;
        let user = await User.findOne({ email });

        if (!user)
          user = await new User({
            email,
            username: name,
            facebookId: id
          }).save();

        //first time user use facebook sign-in?
        if (!user.facebookId) {
          user.facebookId = id;
          await user.save();
        }

        done(null, user);
      }
    )
  );
  //
  //
  //-- Estrategia para autenticar con id_token de Google
  passport.use(
    new GoogleTokenStrategy(
      {
        clientID: GOOGLE_CLIENT_ID
      },
      async (parsedToken, googleId, done) => {
        let { email, name, picture } = parsedToken.payload;
        let user = await User.findOne({ email });

        if (!user)
          user = await new User({
            email,
            username: name,
            googleId,
            picture
          }).save();

        //first time user use google sign-in?
        if (!user.googleId) {
          user.googleId = googleId;
          !user.picture ? (user.picture = picture) : null;
          await user.save();
        }

        done(null, user);
      }
    )
  );

  //
  //
  //-- Estrategia para autenticar con JWT
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
        secretOrKey: JWT_SECRET
      },
      async (payload, done) => {
        const user = await User.findOne({
          _id: payload.id
        });
        if (!user)
          return done(null, false, {
            msg: "User doesn´t exist!"
          });

        return done(null, user);
      }
    )
  );

  //
  //
  //-- Estrategia para autenticar con Email y Contraseña
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        //TODO: implementar try catch para capturar cualquier error aqui
        //Match user
        const user = await User.findOne({ email });
        if (!user)
          return done(null, false, { msg: "The email is not registered" });

        //Match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return done(null, false, { msg: "email/password invalid" });

        return done(null, user);
      }
    )
  );

  //
  //
  //-- Serialize and deserialize users
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(error => done(error, null));
  });
};
