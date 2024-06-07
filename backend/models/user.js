//import mongoose module

const mongoose = require("mongoose");
// create UserSchema
const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
});
//Affect model name to schema
const user = mongoose.model("User", UserSchema);
// make match exportable
module.exports = user;
