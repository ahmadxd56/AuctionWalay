const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter product Description"],
    },
    model: {
        type: String,
        required: [true, "Please Enter product model"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter product Price"],
    },
    biddingPrice: {
        type: Number,
        default: 0
    },
    imageURL: String,

    location: {
        type: String,
        required: [true, "Please Enter Product location"],
        required: true,
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    updatedBy: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    available: { type: Boolean, default: false },
    bids: [
        {
            bidAmount: {
                type: Number,
                default: 0,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            email: {
                type: String,
                required: true,
            },
            userContact: {
                type: String,
                required: true,
            },
            userName: {
                type: String,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model("Product", productSchema);