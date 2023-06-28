import { Router } from "express"; 
import {posAlltOrde, getOrders} from "../handles/handleOrders" 

const OrderRouter = Router(); 

OrderRouter.post("/", posAlltOrde)   
OrderRouter.get("/", getOrders) 


export default OrderRouter;