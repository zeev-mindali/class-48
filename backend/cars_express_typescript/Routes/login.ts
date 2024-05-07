import express , {NextFunction,Request,Response} from 'express';

const loginRouter = express.Router();

//login methods: loginUser, registerUser, forgotPassword

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




export default loginRouter;
