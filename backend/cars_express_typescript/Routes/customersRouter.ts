import express, {NextFunction,Request,Response} from 'express';
import customerLogic from '../logic/CustomerLogic';
const customerRouter = express.Router();

customerRouter.get("/all",async (request:Request,response:Response,next:NextFunction)=>{
    try{
        //L O G I C !
        const customers = await customerLogic.getAllCustomers();
        //return the response from mysql database as json format
        response.status(200).json(customers);
    } catch (err){
        next (err);
    }
})

export default customerRouter;

