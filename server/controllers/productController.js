const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const moment = require('moment');

//create product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const user = req.user;
    const { name, title, description, price, location, model, imageURL } = req.body;

    // Set default values
    const updatedBy = null;
    const biddingPrice = price;

    const product = await Product.create({

        name,
        title,
        description,
        price,
        biddingPrice,
        location,
        model,
        updatedBy,
        imageURL,
        user: user._id,
        bids: [],
    });

    res.status(201).json({
        statusCode: 201,
        success: true,
        message: "The product has been created",
        payload: { product },
    });
});


//get single product post
exports.getProductDetails = async (req, res, next) => {
    const productId = req.params.id;

    const product = await Product.findById(productId)
    if (!product) {
        return next(new ErrorHandler("Product not found", 400));
    }
    res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Product Retrieved",
        payload: { product },
    });
};

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await Product.find()
    if (!products) {
        return next(new ErrorHandler("product not found", 404));
    }
    res.status(200).json({
        statusCode: 200,
        success: true,
        message: "All products Retrieved",
        payload: { products },
    });
});

exports.updateBiddingPrice = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id;

    const { biddingPrice } = req.body

    console.log(biddingPrice)

    const product = await Product.findById(productId).populate('user');;

    if (!product) {
        return next(new ErrorHandler("Product not found", 400));
    }

    // Validate that bidding price is greater than the current price
    if (biddingPrice <= product.biddingPrice) {
        return next(new ErrorHandler("Bidding price must be greater than the current price", 400));
    }

    // Assuming that user information is available in req.user
    const user = req.user;

    // Check if more than 5 days have passed since the product was created
    const createdAt = moment(product.createdAt);
    const currentDate = moment();
    const daysDifference = currentDate.diff(createdAt, 'days');

    if (daysDifference >= 5) {
        // After 5 days, set sold to true
        product.available = true;
    }

    // Update bidding price and username
    product.biddingPrice = biddingPrice;
    product.updatedBy = user.name; // Add a field in your model to store the username

    product.bids.push({
        bidAmount: biddingPrice,
        user: user._id,
        email: user.email,
        userName: user.name,
        userContact: user.phoneNumber
    });

    await product.save();

    await sendEmail({
        subject: 'Bidding Confimation from Auction waly',
        reqUser: req.user.name,
        email: req.user.email,
        name: product.name,
        model: product.model,
        location: product.location,
        ownerName: product.user.name,
        ownerContact: product.user.phoneNumber,
        bidPrice: product.price,
    }, 'html');


    res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Bidding price updated successfully",
        payload: { product },
    });
});

// Delete product by ID
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 400));
    }
    await product.deleteOne();

    res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Product deleted successfully",
        payload: null,
    });
});