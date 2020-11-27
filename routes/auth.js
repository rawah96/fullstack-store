const router = require("express").Router();
let User = require("../models/user.model");
const jwt = require('jsonwebtoken')

// router.post('/signin', (req, res) => {
//   User.findOne({email: req.body.email})
//   .exec((error, user) => {
//     if(error) return res.status(400).json({message: 'error'})
//     if(user) {
//       if(user.authenticate(req.body.password)) {
//         const token = jwt.sign({
//           _id: user._id
//         }, process.env.JWT_SECRET,
//           {expiresIn: '1h'});
//         const {
//           firstName, lastName, email, role, fullName
//         } = user;
//         res.status(200).json({
//           token, user: {firstName, lastName, email, role, fullName}
//         })
//       } else {
//         return res.status(400).json({ message: 'invalid password'})
//       }
//     } else {
//       return res.status(400).json({message: 'something went wrong'})
//     }
//   })
// });

router.post('/signup', (req, res) => {
  User.findOne({email: req.body.email})
  .exec((error, user) => {
    if(user) {
      return res.status(400).json({message: 'account already registered'});}
      
      const {
        firstName,
        lastName,
        email,
        password,
        // username
      } = req.body;

      const a_user = new User({firstName, lastName, email, password })
        a_user.save((error, data) => {
          if(error) {
            return res.status(400).json({message: 'user couldnt be saved..'})
          }
          if(data) {
            return res.status(201).json({ message: 'user created successfully'})}
        })
  })
});

module.exports = router;