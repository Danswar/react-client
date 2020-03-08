const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const passport = require("passport");
const applyPassportConfig = require("./config/passport");

const mongoose = require("mongoose");
const keys = require("./config/keys");

const authRouter = require("./routes/auth");

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

//Passport config
applyPassportConfig(passport);

//DB Connection
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connect..."))
  .catch(err => console.log(err));

//Routes
app.options("*", cors()); //Allow prefligth request
app.use(authRouter);

//Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
