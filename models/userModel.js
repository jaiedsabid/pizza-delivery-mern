const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    isAdmin: {type: Boolean, require, default: false}
},{timestamps: true});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;