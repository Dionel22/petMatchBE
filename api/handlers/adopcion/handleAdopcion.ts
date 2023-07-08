import { Request, Response } from "express";
import { createAdopcion, detailAdopcion } from "../../controllers/adopcion/controllersAdopcion";

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
export const handleCreateAdopcion = async (req: Request, res: Response) => {
   try {
    const { body }= req
    const response = await createAdopcion(body)
    res.status(200).json(response)
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}