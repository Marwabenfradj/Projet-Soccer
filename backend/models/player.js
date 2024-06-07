// import mongoose module
const mongoose = require("mongoose");
//create Playerschema
const playerSchema = mongoose.Schema({
  name: String,
  number: Number,
  post: String,
});
//Affect model name to schema
const player = mongoose.model("Player", playerSchema);
// make player exportable
module.exports = player;
