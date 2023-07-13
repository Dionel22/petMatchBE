require("dotenv").config();
import { Request, Response } from "express";
import { adoptPet, detailAdopcion } from "../../controllers/adopt/controllerAdopt";
const { JWT_SECRET } = process.env;//Esta clave es para asegurar la autenticidad del token.
const jwt = require('jsonwebtoken'); //se utiliza para firmar y verificar tokens JWT; 


export const handleAdopt = async (req: Request, res: Response) => {
    // se extrae el token de la cabecera de autorización.
   //const token = req.headers.authorization;
    try {
        const { id } = req.params;
       //const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
       //  const userId = decodedToken.id;// se extraer el id del token
        //console.log(id, userId)
        const response = await adoptPet( id)
        return res.status(200).json(response)
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }
}

export const handleDetailAdopcion = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
        const userId = decodedToken.id;// se extraer el id del token
        console.log("---",userId)
     const response = await detailAdopcion(userId)
     res.status(200).json(response)
    } catch (error: any) {
     console.log(error.message)
     res.status(400).json({error: error.message})
    }
 }