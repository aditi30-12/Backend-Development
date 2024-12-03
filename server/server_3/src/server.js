import express from "express";
import dotevn from "dotenv"

dotevn.config()
// console.log(PORT)
 console.log(process.env.PORT)
 console.log(process.env.secret_key)

const app=express();

//Routes
//CRUD



// const PORT = 8081;
app.listen(8081,()=>{
    console.log(`server is running on http://localhost:8081`);
})
