// const { findByIdAndUpdate } = require("../models/product");
const app = require("../app");
const catchAsyncFunction = require("../middlewares/catchAsyncFunction");
const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");

exports.createProduct = catchAsyncFunction(async (req, res, next) => {
  //   console.log(req.body);
  const newProduct = await Product.create(req.body);
  res.status(200).json({ success: true, newProduct });
});

exports.showProducts = catchAsyncFunction(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ success: true, products });
});

exports.updateProduct = catchAsyncFunction(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler("could not find the product", 404));
  } else {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true, runValidators: true, useFindAndModify: false }
    );
    res.status(200).json({ success: true, updatedProduct });
  }
});

exports.deleteProduct = catchAsyncFunction(async (req, res, next) => {
  const productId = req.params.id;
  const product = Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("could not find the product", 404));
  } else {
    await product.remove();

    res
      .status(200)
      .json({ success: true, message: "product was deleted successfully" });
  }
});

exports.productDetail = catchAsyncFunction(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("could not find the product", 404));
  } else {
    res.status(200).json({ success: true, product });
  }
});
