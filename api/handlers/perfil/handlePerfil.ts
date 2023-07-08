import {  Request, Response } from "express";
import { getPerfi } from "../../controllers/perfil/controllersPerfil";

// trae todos los productos y busca por nombre
export const handlePerfil = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
       /* const email = (req.session as any).userEmail
        console.log(req.session)
        console.log("-d-d-d->",email)*/
        const response = await getPerfi(id)
       
        return res.status(200).json(response)
    } catch (error: any) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}