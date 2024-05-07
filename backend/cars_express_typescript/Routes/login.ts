import express , {NextFunction,Request,Response} from 'express';
import { registerUser } from '../logic/UserLogic';

const loginRouter = express.Router();

//login methods: loginUser, registerUser, forgotPassword

//loginUser
loginRouter.post(
    "/loginUser",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        let userCred = request.body;
        /*
            {
                userName : "zeev",
                userPass : "12345"
            }
        */
        response.status(200).json({"msg":`hello user ${userCred.userName}`});
    }
)

loginRouter.post(
    "/registerUser",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{
        registerUser(request.body);
        response.status(201).json({"msg":"user was created"});
    }
);


export default loginRouter;
