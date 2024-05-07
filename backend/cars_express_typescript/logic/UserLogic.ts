import { UserCred } from "../Models/UserCred";
const fs = require("fs");

const registerUser = (user:UserCred)=>{
    let userInfo;
    try{
         userInfo = JSON.parse(fs.readFileSync("users.data"));
    } catch (err){
         userInfo = [];
    }
    //check if user exists before saving the user.
    userInfo.push(user);
    fs.writeFileSync("users.data",JSON.stringify(userInfo));
}

const loginUser = (user:UserCred)=>{
    let userInfo;
    try{
         userInfo = JSON.parse(fs.readFileSync("users.data"));
    } catch (err){
         userInfo = [];
    }
    //check the user and password send the password
    //return true / false

}

const forgotPassword = (user:UserCred)=>{
    let userInfo;
    try{
        userInfo = JSON.parse(fs.readFileSync("users.data"));
   } catch (err){
        userInfo = [];
   }
   //find the user...
   //send back the password....
}


export {
    registerUser,
    loginUser,

}