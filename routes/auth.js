// const router = require("express").Router();
// let User = require("../models/user.model");
// const jwt = require("jsonwebtoken");

// router.post('/signin', (req, res) => {
//   User.findOne({ email: req.body.email }).exec((error, user) => {
//     if (error) return res.status(400).json({ error });
//     if (user) {
//       const isPassword = user.authenticate(req.body.password);
//       if (isPassword && user.role === "user") {
//         const token = jwt.sign(
//           { _id: user._id, role: user.role },
//           process.env.JWT_SECRET,
//           { expiresIn: "1d" }
//         );
//         const { _id, firstName, lastName, email, role, fullName } = user;
//         res.status(200).json({
//           token,
//           user: { _id, firstName, lastName, email, role, fullName },
//         });
//       } else {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//   });
// });

// router.post('/signup', (req, res) => {
//   User.findOne({ email: req.body.email }).exec((error, user) => {
//     if (error) return res.status(400).json({ error });
//     if (user) {
//       const isPassword = user.authenticate(req.body.password);
//       if (isPassword && user.role === "user") {
//         const token = jwt.sign(
//           { _id: user._id, role: user.role },
//           process.env.JWT_SECRET,
//           { expiresIn: "1d" }
//         );
//         const { _id, firstName, lastName, email, role, fullName } = user;
//         res.status(200).json({
//           token,
//           user: { _id, firstName, lastName, email, role, fullName },
//         });
//       } else {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//   });
//   // User.findOne({email: req.body.email})
//   // .exec((error, user) => {
//   //   if(user) {
//   //     return res.status(400).json({message: 'account already registered'});}
      
//   //     const {
//   //       firstName,
//   //       lastName,
//   //       email,
//   //       password,
//   //       // username
//   //     } = req.body;

//   //     const a_user = new User({firstName, lastName, email, password })
//   //       a_user.save((error, data) => {
//   //         if(error) {
//   //           return res.status(400).json({message: 'user couldnt be saved..'})
//   //         }
//   //         if(data) {
//   //           return res.status(201).json({ message: 'user created successfully'})}
//   //       })
//   // })
// });

// module.exports = router;

const express = require('express');
const { signup, signin } = require('../controller/auth');
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);


// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;