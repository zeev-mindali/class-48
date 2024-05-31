import express, { NextFunction, Request, Response } from "express";
import { forgotPassword, loginUser, registerUser, deleteUser } from "../logic/UserLogic";
import { checkJWT, createJWT } from "../Utils/jwt";

const loginRouter = express.Router();

//login methods: loginUser, registerUser, forgotPassword
export type userCred = {
  name: string;
  email: string;
  role: string;
  jwt: string;
};
//loginUser
loginRouter.post(
  "/loginUser",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    let userCred = request.body;
    const userData = loginUser(userCred);

    //need to expose headers
    if (userData !== undefined && userData["jwt"].length > 10) {
      console.log(userData);
      response
        .status(200)
        .header("Access-Control-Expose-Headers", "Authorization") //do i really need it????
        .header("Authorization", userData["jwt"])
        .json(userData);
    } else {
      response.status(401).json({ msg: "bad password :(" });
    }
  }
);

loginRouter.post(
  "/registerUser",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    let result = await registerUser(request.body);
    if (!result.errno) {
      response.status(201).json({ msg: "created" });
    } else {
        response.status(400).json({msg: result.sqlMessage})
    }
  }
);

//forget password.....
loginRouter.get(
  "/forgotPassword/:userName",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    let userName = request.params.userName;
    let userPass = forgotPassword(userName);
    if (userPass !== "") {
      response.status(200).json({ password: userPass });
    } else {
      response.status(400).json({ msg: "user not found" });
    }
  }
);

loginRouter.post(
  "/getJWT",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    let userData = request.body;
    response.status(200).json({ jwt: createJWT(userData) });
  }
);

loginRouter.get(
  "/checkJWT/:token",
  async (request: Request, response: Response, nextFunction: NextFunction) => {
    console.log("token: ", request.params.token);
    if (checkJWT(request.params.token)) {
      response.status(200).json({ msg: "all ok" });
    } else {
      response.status(401).json({ msg: "token is invalid" });
    }
  }
);

loginRouter.delete(
    "/delete/:id",
    async (request: Request, response: Response, nextFunction: NextFunction) => {
        console.log(`deleting ${request.params.id}`)
        let data = await deleteUser(+request.params.id);
        console.log("data: ",data);
        response.status(200).json({msg:"operation made successfully"});
    }
    
)
export default loginRouter;
