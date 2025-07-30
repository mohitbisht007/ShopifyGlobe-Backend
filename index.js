import express from "express"
import mongoose, { mongo } from "mongoose";

const app = express();
const PORT = 5051

mongoose.connect("mongodb+srv://mohitbisht5678:ZDNR2Vf4GybDWD87@shopifycluster.9j9tqea.mongodb.net/")
.then(() => {
    console.log("DB Connected")
})
.catch(e => console.log(e))

app.listen(PORT, () => {
    console.log(`App is listening to PORT: ${PORT}`)
})
