import express from "express"
import mongoose, { mongo } from "mongoose";
import { productData } from "./seeder/seedData.js";
import {addSeeder, getAllProducts, getProductById} from "./Controllers/product.controller.js";
import { addToCart, updateCart, deleteCart, viewCart } from "./Controllers/cart.controller.js";
import { registerUser, loginUser } from "./Controllers/user.controller.js";
import aunthenticateUSer from "./Middlewares/authenticateUser.js";

const app = express();
const PORT = 5051

app.use(express.json())


//Connected my Database
mongoose.connect("mongodb+srv://mohitbisht5678:ZDNR2Vf4GybDWD87@shopifycluster.9j9tqea.mongodb.net/")
.then(() => {
    console.log("DB Connected")
})
.catch(e => console.log(e))


//Inserting Data Route Used Only Once Commenting this now
// app.post("/seeder", addSeeder)

// Home Route
app.get("/", (req,res) => {
    res.status(200).json({msg: "Home Route"})
})

//Products Route
app.get("/products", getAllProducts)

//Individual Route
app.get("/products/:id", getProductById)

//View All Cart Items
app.get("/cart", aunthenticateUSer, viewCart)

// Add new item to the cart
app.post("/cart/add", aunthenticateUSer, addToCart)

//Update cart items quantity
app.put("/cart/:id", aunthenticateUSer, updateCart)

//Delete cart item
app.delete("/cart/:id", aunthenticateUSer, deleteCart)

//Register new user
app.post("/register", registerUser)

//login route
app.post("/login", loginUser)


app.listen(PORT, () => {
    console.log(`App is listening to PORT: ${PORT}`)
})

