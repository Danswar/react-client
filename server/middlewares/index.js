const passport = require("passport");

const passportStrategy = nameStrategy => {
  return (req, res, next) =>
    passport.authenticate(nameStrategy, function(err, user, info) {
      if (err) return next(err);
      if (!user) return res.status(401).json(info);
      req.user = user;
      return next();
    })(req, res, next);
};

module.exports = {
  //--
  //Auth middlewares
  authJWT: passportStrategy("jwt"),
  authLocal: passportStrategy("local"),
  authGoogle: passportStrategy("google-id-token"),
  authFacebook: passportStrategy("facebook-token")
};
