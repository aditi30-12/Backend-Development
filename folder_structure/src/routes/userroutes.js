import { login,signup } from "../controller/usercontroller.js";
import express from "express"



const userrouter= express.Router()

userrouter.get("/login",login)
userrouter.post("/signup",signup)

export default userrouter;