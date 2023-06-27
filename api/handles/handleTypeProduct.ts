import {  Request, Response } from "express";
import { getAllTypeProduct } from "../controllers/controllerTypeProduct";

export const getTypeProduct = async (req: Request, res: Response) => {
    try {
        const response = await getAllTypeProduct();
        res.status(200).json(response)

    } catch (error) {
       console.log(error)
       res.status(400).json({msg: error})
    }
}