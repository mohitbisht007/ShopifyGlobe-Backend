import Products from "../Models/product.schema.js";
import { productData } from "../seeder/seedData.js";

//this is my data seeder function where I Have added producst in my DB
export async function addSeeder(req, res) {
  try {
    await Products.insertMany(productData);
    return res.status(200).json({ message: "Data Succesfully Added" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

// get all products list with this fuinction
export async function getAllProducts(req, res) {
  try {
    const allProducts = await Products.find({});
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

// get an individual product by id
export async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const product = await Products.findById(id);

    if (!product) {
      return res.status(400).json({ message: "Product Not Found"});
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
