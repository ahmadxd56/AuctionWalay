const express = require("express");
const { createProduct, getProductDetails, getAllProducts, updateBiddingPrice, deleteProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

//create new product
router.route("/product/new").post(isAuthenticatedUser, createProduct);

//get single product details
router.route("/product/:id")
    .get(getProductDetails)
    .delete(isAuthenticatedUser, deleteProduct);

//get all products
router.route("/products").get(getAllProducts);

// Update bidding price
router.route("/product/update-bidding/:id").patch(isAuthenticatedUser, updateBiddingPrice);


module.exports = router