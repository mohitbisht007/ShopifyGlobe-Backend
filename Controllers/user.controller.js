import User from "../Models/user.schema.js";
import jwt from "jsonwebtoken";


// function for registering new User with username and password
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

//login user with username and password also generating a token for authentication

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password can't be empty" });
    }

    const user = await User.findOne({username: username})
     if(!user){
         return res
        .status(400)
        .json({ message: "No User Found" });
    }
    
    if(user.password !== password){
      return res
        .status(400)
        .json({ message: "Incorrect Password" });
    }

    const accessToken = jwt.sign({user: user}, "mySecretKey", {expiresIn: "1h"})
    res.status(200).json(accessToken)
  } catch (error) {
    return res.status(400).json(error.message);
  }
}
