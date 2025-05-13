import express from 'express';
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();




app.listen(5000,()=>{
    connectDB();
    console.log("Server start at http:/localhost:5000");
})

console.log(process.env.MONGODB_STRING);

