const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    required: [true, "nama tidak boleh kosong"],
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Baju",
      "Celana",
      "Aksesoris",
      "Jaket",
    ],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model(
  "Product",
  productSchema
);

module.exports = Product;
