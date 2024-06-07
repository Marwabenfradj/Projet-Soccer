//import mongoose module

const mongoose = require("mongoose");
// create MatchSchema
const MatchSchema = mongoose.Schema({
  scoreOne: Number,
  scoreTwo: Number,
  teamOne: String,
  teamTwo: String,
});
//Affect model name to schema
const match = mongoose.model("Match", MatchSchema);
// make match exportable
module.exports = match;
