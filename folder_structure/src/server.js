import express from "express";
import userrouter from "./routes/userroutes.js";
import { ConnectDB } from "./config/connectdb.js";
//app intialize
const app = express();
app.use(express.json())
 ConnectDB()
//routes

app.use("/user", userrouter)


app.get("/",(req,res)=>{
    let data={html:"<h1>Hello</h1>",msg:"It is heading tag"}
    res.send(`${data.html},${data.msg}`)
})
const getData=(req,res)=>{
    res.send("getting Data")
}
app.get("/data",getData)
 //Start the server

 let PORT =8081;

 app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
 })