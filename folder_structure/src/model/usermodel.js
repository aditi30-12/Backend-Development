import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    mobile:{type:Number,unique:true,},
    password:{type:String,require:true},
   
})
const userModel = new mongoose.model("user",userSchema)

export default userModel;