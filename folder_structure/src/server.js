import express from "express";
import userrouter from "./routes/userroutes.js";
import { ConnectDB } from "./config/connectdb.js";
import router from "./routes/userroutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authMiddle from "./middleware/authMiddle.js"

dotenv.config();

//app intialize
const app = express();
app.use(express.json())
 ConnectDB(process.env.Mongo_url);
//routes

app.use("/user", userrouter)


app.get("/data",(req,res)=>{
    res.json("data is fatched")
})
app.post("/create", authMiddle,(req,res)=>{
    const data = req.body;
    res.json(data)
  })
  
  

  
 //Start the server

 let PORT =8081;

 app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
 })