import Products from "../Schema/product.schema.js";
import { productData } from "../seeder/seedData.js";

export async function addSeeder(req, res) {
  try {
    await Products.insertMany(productData);
    return res.status(200).json({ message: "Data Succesfully Added" });
  } catch (error) {
    return res.status(400).json({ message: "Error Adding Data: ", error });
  }
}

export async function getAllProducts(req, res) {
  try {
    const allProducts = await Products.find({});
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching Data: ", error });
  }
}

export async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const product = await Products.findById(id);

    if (!product) {
      return res.status(400).json({ message: "Product Not Found"});
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching Data: ", error });
  }
}
