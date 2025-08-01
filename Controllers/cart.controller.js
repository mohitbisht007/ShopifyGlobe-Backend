import mongoose from "mongoose";
import Cart from "../Models/cart.schema.js";
import Products from "../Models/product.schema.js";


//this my cart route function where you can see all my routes
export async function viewCart(req,res){
  try {
    const allCartItmes = await Cart.find({})
    if(!allCartItmes || allCartItmes.length === 0) {
      return res.status(400).json({ message: "No Items in The Cart" })
    }
    return res.status(200).json(allCartItmes)
  } catch (error) {
    return res.status(404).json(error.message);
  }
}


//add new item to the cart by providing productId and quantity in body
export async function addToCart(req, res) {
  try {
    const allProducts = req.body;
    const isArray = Array.isArray(allProducts);

    if (isArray) {
      for (const prod of allProducts) {
        const product = await Products.findById(prod.productId);
        if (!product)
          return res.status(404).json({ message: "Product Not Found" });
      }
      await Cart.insertMany(allProducts);
      return res.status(200).json(error.message);
    }

    const product = await Products.findById(allProducts.productId);
    if (!product) return res.status(404).json({ message: "Product Not Found" });
    const newCartItem = new Cart(allProducts);
    await newCartItem.save();
    return res.status(200).json({ message: "Product Added To Cart" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

// update a cart item quantity by sending cart id in url and quanity in body
export async function updateCart(req, res) {
    try {
        const id = req.params.id;
        const {quantity} = req.body
        if(!quantity){
          return res.status(400).json({ message: "You have to Enter Quantity" })
        }
        if(quantity<=0) return res.status(400).json({ message: "Quantity must be greater than 0" })
        const updatedItem = await Cart.findByIdAndUpdate(id, {quantity}, {new: true})
        return res.status(200).json(updatedItem); 
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

//deleteing the cart item with cart Id
export async function deleteCart(req, res) {
  try {
    const id = req.params.id;
    const cartItem = await Cart.findByIdAndDelete(id)
    if(!cartItem){
      return res.status(400).json({ message: "No Id Matched To Delete The Item" })
    }

    return res.status(200).json(cartItem); 
  } catch (error) {
     return res.status(400).json(error.message);
  }
}
