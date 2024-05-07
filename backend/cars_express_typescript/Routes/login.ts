import express, { NextFunction, Request, Response } from "express";
import { forgotPassword, loginUser, registerUser } from "../logic/UserLogic";

const loginRouter = express.Router();

//login methods: loginUser, registerUser, forgotPassword

//loginUser
loginRouter.post(
  "/loginUser",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    let userCred = request.body;
    /*
            {
                userName : "zeev",
                userPass : "12345"
            }
        */
    if (loginUser(userCred)) {
      response.status(200).json({ msg: `hello user ${userCred.userName}` });
    } else {
        response.status(401).json({ msg: "bad password :("});
    }
  }
);

loginRouter.post(
  "/registerUser",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    if (registerUser(request.body)) {
      response.status(201).json({ msg: "user was created" });
    } else {
      response.status(400).json({ msg: "user already exists" });
    }
  }
);

//forget password.....
loginRouter.get(
    "/forgotPassword/:userName",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        let userName = request.params.userName;
        let userPass = forgotPassword(userName);
        if (userPass!==""){
            response.status(200).json({password: userPass})
        } else {
            response.status(400).json({msg:"user not found"});
        }
    }
)
export default loginRouter;
