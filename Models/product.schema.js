import mongoose from "mongoose";


//this is my productSchema where all the fields are required to add a new prodcut at DB
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


//my product model
const Products = mongoose.model("Products", productSchema);
export default Products;
