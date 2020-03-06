const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email = String,
    username = String,
    password = String,
},{
    timestamps: {
        createdAt,
        updatedAt
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;