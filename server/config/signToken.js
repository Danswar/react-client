const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

//Firma de tokens
module.exports = async user => {
  const token = await JWT.sign(
    {
      id: user._id,
      email: user.email,
      sub: user.username,
      picture: user.picture ? user.picture : null
    },
    JWT_SECRET,
    {
      expiresIn: 3600
    }
  );
  return token;
};
