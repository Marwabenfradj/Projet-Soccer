//import mongoose module

const mongoose = require("mongoose");
// create TeamSchema
const TeamSchema = mongoose.Schema({
  name: String,
  owner: String,
  foundation: Date,
});
//Affect model name to schema
const team = mongoose.model("Team", TeamSchema);
// make team exportable
module.exports = team;
