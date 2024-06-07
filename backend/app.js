//import express module
const express = require("express");
//import body-parser module
const bodyParser = require("body-parser");
//import mongoose module
const mongoose = require("mongoose");

// create an express application (app)
const app = express();

// connect DB
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");

//app configuration
//send JSON response from BE => FE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});
// Models Importation

const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");

//business logic
//Business Logic : signUp
app.post("/users", (req, res) => {
  console.log("here into BL signUp", req.body);
  let user = new User(req.body);
  user.save();
  res.json({ msg: "Added with success" });
});

//Business Logic : Add Match
app.post("/matches", (req, res) => {
  console.log("here into BL:Add Match", req.body);

  let matchObj = new Match(req.body);
  matchObj.save();
  res.json({ message: "Added with success" });
});
//Business Logic : GEt All Matches
app.get("/matches", (req, res) => {
  console.log("here into BL:Get All Matches");
  Match.find().then((docs) => {
    console.log("Here docs", docs);
    res.json({ matches: docs });
  });
});
//Business Logic : Get Match By Id
app.get("/matches/:id", (req, res) => {
  console.log("here into BL:Get Match By Id", req.params.id);
  Match.findById(req.params.id).then((doc) => {
    console.log("here doc", doc);
    res.json({ match: doc });
  });
});

//Business Logic : Update Match
// app.put("/matches/:id", (req, res) => {
//   console.log("here into BL:Update Match", req.body);
//   Match.findByIdAndUpdate({ _id: req.params.id }, req.body).then((response) => {
//     console.log("here response after update", response);
//     res.json({ msg: response });
//   });
// });

app.put("/matches", (req, res) => {
  console.log("here into BL:Update match", req.body);
  Match.updateOne({ _id: req.body._id }, req.body).then((response) => {
    console.log("here response after edit", response);
    if (response.nModified == 1) {
      res.json({ message: "Edited with success" });
    } else {
      res.json({ message: "error" });
    }
  });
});
//Business Logic : Delete Match
app.delete("/matches/:id", (req, res) => {
  console.log("here into BL:Delete Match", req.params.id);
  Match.deleteOne({ _id: req.params.id }).then((response) => {
    console.log("here response after delete", response);
    if (response.deletedCount == 1) {
      res.json = { msg: "deleted with success" };
    } else {
      res.json({ msg: "error" });
    }
  });
});

//Business Logic : search Matches
app.post("/matches/search", (req, res) => {
  console.log("here into BL:Search Match", req.body);
  res.json({ message: "aa" });
});

//Business Logic : Add Player
app.post("/players", (req, res) => {
  console.log("here into BL Add player", req.body);
  let playerObj = new Player(req.body);
  playerObj.save();
  res.json({ message: "Added with success" });
});
//Business Logic : Update Player
app.put("/players", (req, res) => {
  console.log("here into BL update player", req.body);
  Player.updateOne({ _id: req.body._id }, req.body).then((response) => {
    console.log("here response after edit", response);
    if (response.nModified == 1) {
      res.json({ message: "Edited with success" });
    } else {
      res.json({ message: "error" });
    }
  });
});

// make app importable from another files
module.exports = app;
