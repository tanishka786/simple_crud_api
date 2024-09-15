const mongoose = require('mongoose');

const ProductScheme = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true
    }
);

//allowing mongodb to use this model
const Product = mongoose.model("Product",ProductScheme);

module.exports = Product;
