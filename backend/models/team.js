// import mongoose module
const mongoose = require("mongoose");
//create TeamSchema
const TeamSchema = mongoose.Schema({
  name: String,
  date: Date,
  description: String,
});
//Affect model name to schema
const team = mongoose.model("Team", TeamSchema);
// make player exportable
module.exports = team;
