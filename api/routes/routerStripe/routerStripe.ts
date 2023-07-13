import { Router } from "express";
import  { handleStripe} from "../../handlers/stripe/handleStripe"



const ApiRouter = Router();

ApiRouter.post("/",handleStripe)


export default ApiRouter;