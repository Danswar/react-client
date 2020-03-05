const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

//DB Connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connect..."))
  .catch(err => console.log(err));

//Routes
app.options("*", cors()); //Allow prefligth request

const router = express.Router();
router.get("/", (req, res) => {
  console.log("router1");
  res.status(200).json({ msg: "Hola mundo" });
});
app.use(router);

//Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
