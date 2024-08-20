//install jwt token handler

import { UserCred } from "../Models/UserCred";

//npm install jsonwebtoken
const jwt = require('jsonwebtoken');

//what is my secret key, i will not share it with any program
const secretKey = "the-secret-key-need-to-be-at-least-256-bytes";

//jwt => header,body,signature (secret key)
const createJWT = (user:UserCred)=>{
    const payload = {
        id:user.userEmail,
        name:user.userName,
        role: user.userRole
    }

    
    //for how long the token will be alive
    const options = {expiresIn: '1h'};

    const myJWT = jwt.sign(payload,secretKey,options);
    console.log("jwt data:", payload)
    console.log("jwt: ","Bearer "+myJWT);
    return "Bearer "+myJWT;
}

const checkJWT = (token:string)=>{
    try{
        const checkToken=token.split(' ')[1];
        const decoded = jwt.verify(checkToken,secretKey);
        console.log(decoded);
        return createJWT(new UserCred(0,decoded.name,decoded.role,decoded.id));
    } catch (err:any) {
        console.log("error: ",err.name);
        return "";
    }
}

export {
    createJWT,
    checkJWT,

}