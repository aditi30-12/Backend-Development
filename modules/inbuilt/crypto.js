// const crypto =require("crypto");
import crypto from "crypto"
const password="mysecretpassword";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log(`Hashed password: ${hash}`);

//Password Verfication with HMAC

//const crypto =require("crypto");

// const key="secretKey";
// const data="Sensitive data";

// //Create HMAC
// const hmac =crypto.createHash("sha256").update(password).digest("hex");
// console.log("HMAC")

//Generating Secure Tokens

// const crypto =require("crypto");
const generateToken=() => {
    return crypto.randomBytes(32).toString("hex");
};
console.log(`Token: ${generateToken()}`);