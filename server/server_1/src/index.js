import express from "express";

//app initilize

const app= express()

// console.log(app)


//routes
app.get("/",(req,res)=>{
    res.send(`<h1>Hello</h1>
        <button>Click</button>
        <input type="text"></input>`);
})
app.get("/data",(req,res)=>{
    res.send("Hello-2")
    // res.write("hello-2")
    // res.end()
});


const PORT =8081;

app.listen(PORT,()=>{
console.log(`server is running http://localhost:${PORT}`);
})

//nodemon