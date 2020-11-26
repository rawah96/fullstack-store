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

router.route("/:id").get(
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

router.route("/:id").delete(
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "product removed" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

router.route("/").post(
  asyncHandler(async (req, res) => {
    const product = new Product({
      name: "sample name",
      price: 0,
      user: req.user._id,
      image: "/images/sample.jpg",
      brand: "Sample brand",
      category: "Simple Category",
      countInStock: 0,
      numReviews: 0,
      description: "Sample Description",
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  })
);

router.route("/:id").put(
  asyncHandler(async (req, res) => {
    const {
      name,
      price,
      description,
      image,
      brand,
      category,
      countInStock,
    } = req.body;

    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.brand = brand;
      product.image = image;
      product.category = category;
      product.countInStock = countInStock;
    } else {
      res.status(404);
      throw new Error("Product not found");
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  })
);

module.exports = router;
