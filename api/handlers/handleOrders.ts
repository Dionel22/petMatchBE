import {  Request, Response } from "express";  
import {postOrder}  from "../controllers/controllersOrders/controllerOrders"  
import {getAllOrder} from "../controllers/controllersOrders/controllerOrders"


export const posAlltOrde = async (req: Request, res: Response) => {
    try { 
        const {taxes, price, totalPrice, purchaseDate} = req.body 
        const response = await postOrder(taxes, price, totalPrice, purchaseDate);
       return res.status(201).json(response);
        
    } catch (error) {   
        console.log(error)
        res.status(400).json({msg: error});              
    }
} 

export const getOrders = async(req: Request, res: Response) =>{ 
    try { 
        const response = await getAllOrder() 
        res.status(200).json(response)
        
    } catch (error) { 
        console.log(error)
        res.status(400).json({msg: error})
        
    }
}