const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Product = require("../models/productModel");

router.route("/").get(
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

module.exports = router;
