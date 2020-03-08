const passport = require("passport");

module.exports = {
  //--
  //Auth middlewares
  authJWT: passport.authenticate("jwt", { session: false }),
  authLocal: passport.authenticate("local", { session: false })
};
