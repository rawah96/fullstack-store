const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log('adding a user')
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

// // urls user types to perform operations
// const router = require('express').Router();
// let User = require('../models/user.model');

// // get method to get the user
// // finding all users then convert the response to json
// router.route('/').get((req, res) => {
//     User.find().then((users) => res.json(users))
//     .then(err => res.status(400).json('error' + err));
// });


// // adding a user
// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     // user from the model
//     const newUser = new User({username});

//     // save to database
//     newUser.save().then(() => res.json('user added'))
//     .then(err => res.status(400).json('err' + err))
// });

// module.export = router;