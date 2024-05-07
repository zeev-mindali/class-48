//install jwt token handler
//npm install jsonwebtoken
const jwt = require('jsonwebtoken');

//what is my secret key, i will not share it with any program
const secretKey = "the-secret-key-need-to-be-at-least-256-bytes";

//jwt => header,body,signature (secret key)
const createJWT = (userName:string,userEmail:string,userRole:string)=>{
    const payload = {
        id:userName,
        email:userEmail,
        role: userRole
    }

    
    //for how long the token will be alive
    const options = {expiresIn: '1h'};

    const myJWT = jwt.sign(payload,secretKey,options);
    console.log("jwt: ",myJWT);
    return myJWT;

}

const checkJWT = (token:string)=>{
    try{
        const decoded = jwt.verify(token,secretKey);
        console.log(decoded);
        return true;
    } catch (err) {
        console.log("error: ",err);
        return false;
    }
}

export {
    createJWT,
    checkJWT,

}