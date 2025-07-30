import express from "express"
import mongoose, { mongo } from "mongoose";
import { productData } from "./seeder/seedData.js";
import {addSeeder, getAllProducts, getProductById} from "./Controllers/product.controller.js";
import { addToCart, updateCart } from "./Controllers/cart.controller.js";

const app = express();
const PORT = 5051

app.use(express.json())

mongoose.connect("mongodb+srv://mohitbisht5678:ZDNR2Vf4GybDWD87@shopifycluster.9j9tqea.mongodb.net/")
.then(() => {
    console.log("DB Connected")
})
.catch(e => console.log(e))


//Inserting Data Route Used Only Once Commenting this
// app.post("/seeder", addSeeder)

app.get("/", (req,res) => {
    res.status(200).json({msg: "Home Route"})
})

app.get("/products", getAllProducts)

app.get("/products/:id", getProductById)

app.post("/cart", addToCart)

app.put("/cart/:id", updateCart)

app.delete("/cart/:id", (req, res) => {
    res.status(200).json({msg: "Item Deleted"})
})

app.listen(PORT, () => {
    console.log(`App is listening to PORT: ${PORT}`)
})
