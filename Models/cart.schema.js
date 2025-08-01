import mongoose from "mongoose";


//this is my cartSchema where both the fields are required to add a new cart
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

// this is my cart model
const Cart = mongoose.model("Cart", cartSchema) 
export default Cart