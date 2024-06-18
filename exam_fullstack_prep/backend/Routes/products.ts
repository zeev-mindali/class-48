//getting the methods we need
import express , {NextFunction,Request,Response} from 'express';

const prodRouter = express.Router();

prodRouter.get(
    "/products/",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{                      
        response
        .status(200)
        .json();
    }
)

prodRouter.get(
    "/products/:id/:units",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{    
        let id = +request.params.id;     //+ is for converting to number
        let units = +request.params.units;
        await response
        .status(200)
        .json();
    }
)

export default prodRouter;