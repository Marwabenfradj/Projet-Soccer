//import mongoose module

const mongoose = require("mongoose");
// create PlayerSchema
const PlayerSchema = mongoose.Schema({
  name: String,
  number: Number,
  age: Number,
  position: String,
});
//Affect model name to schema
const player = mongoose.model("Player", PlayerSchema);
// make player exportable
module.exports = player;
