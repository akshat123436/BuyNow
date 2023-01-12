const express = require("express");
const {
  showProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productDetail,
} = require("../controllers/productControllers");
const router = express.Router();

//to create a product
router.route("/product/new").post(createProduct);

//to show all products
router.get("/products", showProducts);

router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(productDetail);
module.exports = router;
