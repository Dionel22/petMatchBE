import {  Request, Response } from "express";
import { getAllPetShop } from "../controllers/controllerPetShop";
import { postAllPetShop } from "../controllers/controllerPetShop";

// trae todos los productos
export const getPetShop = async (req: Request, res: Response) => {
    try {
        const response = await getAllPetShop()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}
//crea producto
export const postPetShop = async (req: Request, res: Response) => {
    try {
        const { name, imagen, price, available, averageRating, typeId } = req.body;
        const response = await postAllPetShop(name, imagen, price, available, averageRating, typeId)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}