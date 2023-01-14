// const { findByIdAndUpdate } = require("../models/product");
const app = require("../app");
const catchAsyncFunction = require("../middlewares/catchAsyncFunction");
const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");
exports.createProduct = catchAsyncFunction(async (req, res, next) => {
  //   console.log(req.body);
  const newProduct = await Product.create(req.body);
  res.status(200).json({ success: true, newProduct });
});

exports.getAllProducts = catchAsyncFunction(async (req, res) => {
  const resultPerPage = 5;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  let products = await apiFeature.query;
  res.status(200).json({ success: true, products, productsCount });
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
  const product = await Product.findById(productId);
  // console.log(product);
  if (!product) {
    return next(new ErrorHandler("could not find the product", 404));
  } else {
    await product.remove();

    res
      .status(200)
      .json({ success: true, message: "product was deleted successfully" });
  }
});

exports.getProductDetails = catchAsyncFunction(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("could not find the product", 404));
  } else {
    res.status(200).json({ success: true, product });
  }
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncFunction(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncFunction(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  // console.log(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncFunction(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncFunction(async (req, res, next) => {
  console.log("product");
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
