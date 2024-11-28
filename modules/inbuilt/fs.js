// const fs =require("fs");
import fs from "fs";
console.log(fs)
fs.readFile("example.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading the file:",err);
    }else{
        console.log("File content:",data);
    }
});
//Asynchronous
fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err)throw err;
    console.log(data);
});

//Writing to Files
fs.writeFile("example.txt",JSON.stringify({"a":"123"}),(err)=>{
    if(err)throw err;
    console.log("File written successful");
});
//Synchronous;
const data=fs.readFileSync("example.txt","utf-8");
console.log(data);

//Writing to Files
fs.writeFileSync("file.txt","Hello MERN");
console.log("File written sucessfully");

//Appending To file
fs.appendFile("file.txt","\n",JSON.stringify({"name":"rahul"}),(err)=>{
    if(err)throw err;
    console.log("Content appended Sucessfully");
});

//Deleting File
fs.unlink("file.txt",(err)=>{
    if(err)throw err;
    console.log("File deleted Suceessfully");
});

//Checking File /Directory Existence
//Depricted :fs.exists
//Renaming Files
// Rename or move a file

fs.rename("oldName.txt","newName.txt",(err)=>{
    if(err) throw err;
    console.log("File Named Successfully");
});