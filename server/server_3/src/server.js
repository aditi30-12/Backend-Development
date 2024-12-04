import express from "express";
import dotevn from "dotenv"

dotevn.config()
// console.log(PORT)
//   console.log(process.env.PORT)
//  console.log(process.env.secret_key)

const app=express();
//middleware

app.use(express.json())
app.use(express.text())

let arr =[
    {
        name: "x",
        "id": 1
    },
    {
        name: "y",
        "id": 2,
    }
];



//Routes
//CRUD
 app.get("/",(req,res)=>{
//  res.send({message:"arr_Data",arr:arr})
res.send(arr) 
})
app.get("/data/abc",(req,res)=>{
    res.send("Hello Data")
})
app.post("/",(req,res)=>{
    const data =req.body
    data.id =arr.length+1;
    // res.send(data)
    // console.log(req.body)
    arr.push(data)
    console.log(arr)
    res.send(arr)
});
// console.log(arr)

app.put("/update/:id",(req,res)=>{
    const {id} = req.params
    const data =req.body
    const index=arr.findIndex((item,index)=>{
    //    console.log(item)
    if(item.id==parseInt(id)){

     arr[index].name=data.name;
    }
    });
    arr[index]=data
    res.send(arr);    
    res.send(id);
})




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

