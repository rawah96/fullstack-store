const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
} = require("../controller/UserController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
