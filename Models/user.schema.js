import mongoose from "mongoose";

// this is my userSchema to register a new user you need username and password
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
})

//its my user model
const User = mongoose.model("User", userSchema)
export default User