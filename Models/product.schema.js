import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock_quantity: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("Products", productSchema);
export default Products;
