// const http= require("http");
import http from "http"
const server=http.createServer((req,res)=> {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("hello")
    // res.send("Hello")
     res.end("Hello,Node.js");
});
server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");

});