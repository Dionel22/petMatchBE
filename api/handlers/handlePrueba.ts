import {  Request, Response } from "express";
import { enviado } from "../controllers/pruebaEmail";


export const getHandlePruebas = async (req: Request, res: Response) => {
    try {
        const response = await enviado()
        console.log(response)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}