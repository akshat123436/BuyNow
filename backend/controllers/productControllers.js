// const { findByIdAndUpdate } = require("../models/product");
const app = require("../app");
const Product = require("../models/product");

exports.createProduct = async (req, res, next) => {
  //   console.log(req.body);
  const newProduct = await Product.create(req.body);
  res.status(200).json({ success: true, newProduct });
};

exports.showProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ success: true, products });
};

exports.updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(500).json({ success: false, message: "Could not find product" });
  } else {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({ success: true, updatedProduct });
  }
};

exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  const product = Product.findById(productId);

  if (!product) {
    res.status(500).json({
      success: false,
      message: "could not find the product to delete",
    });
  } else {
    await product.remove();

    res
      .status(200)
      .json({ success: true, message: "product was deleted successfully" });
  }
};

exports.productDetail = async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(500).json({
      success: false,
      message: "could not find the product",
    });
  } else {
    res.status(200).json({ success: true, product });
  }
};
