import {  Request, Response } from "express";
import { getAllPetTypes } from "../../controllers/pet/get/getPetType";

export const getHandlePetTypes = async (req: Request, res: Response) => {
    try {
        const response = await getAllPetTypes()
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}