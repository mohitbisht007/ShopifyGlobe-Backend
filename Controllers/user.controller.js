import User from "../Models/user.schema.js";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username && !password) {
      return res
        .status(400)
        .json({ message: "Username and password can't be empty" });
    }

    const user = new User({ username, password });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      return res
        .status(400)
        .json({ message: "Username and password can't be empty" });
    }

    const user = await User.findOne({username: username})
    console.log(user)
    if(!user){
         return res
        .status(400)
        .json({ message: "No User Found" });
    }

    const accessToken = jwt.sign({user: user}, "mySecretKey", {expiresIn: "1h"})
    res.status(200).json(accessToken)
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
