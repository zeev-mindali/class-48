//getting the methods we need
import express , {NextFunction,Request,Response} from 'express';
import { bikeInfo, carInfo, truckInfo } from '../logic/TransportLogic';
import { checkJWT } from '../Utils/jwt';

const carRouter = express.Router();

carRouter.get(
    "/car/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        //const jwt = checkJWT(request.header("Authorization") || "");        
        // if (jwt.length>10){
        //     response
        //     .status(200)
        //     .header('Access-Control-Expose-Headers', 'Authorization')
        //     .header("Authorization",jwt)
        //     .json(await carInfo(request.params.id));
        // } else {
        //     response.status(401);
        // }
        console.log("car info");
        response
        .status(200)
        .header('Access-Control-Expose-Headers', 'Authorization')
        //.header("Authorization",jwt)
        .json(await carInfo(request.params.id));
    }
)

carRouter.get(
    "/bike/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        await response.status(200).json(await bikeInfo(request.params.id));
    }
)

carRouter.get(
    "/truck/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(await truckInfo(request.params.id));
    }
)
export default carRouter;