import { Request, Response } from "express";
import { adoptPet, detailAdopcion } from "../../controllers/adopt/controllerAdopt";

export const handleAdopt = async (req: Request, res: Response) => {
    try {
        const { petId, userId } = req.body;
        console.log(petId, userId)
        const response = await adoptPet( userId, petId)
        return res.status(200).json(response)
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }
}

export const handleDetailAdopcion = async (req: Request, res: Response) => {
    try {
     const { id }= req.params
     const response = await detailAdopcion(id)
     res.status(200).json(response)
    } catch (error: any) {
     console.log(error.message)
     res.status(400).json({error: error.message})
    }
 }