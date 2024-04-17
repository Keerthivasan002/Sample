import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());
app.use("/",router)

//sample
//hello
mongoose.connect(process.env.URL).then(console.log("Mongodb_Connected")).catch((error) => console.log(error.message));
app.listen(5000, () => {
  console.log("Node_connected")
});