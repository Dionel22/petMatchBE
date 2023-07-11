require("dotenv").config();
import { Request, Response } from "express";
import { createFormulario} from "../../controllers/formulario/controllersAdopcion"
const { JWT_SECRET } = process.env;//Esta clave es para asegurar la autenticidad del token.
const jwt = require('jsonwebtoken'); //se utiliza para firmar y verificar tokens JWT; 

export const handleCreateFormulario = async (req: Request, res: Response) => {
   // se extrae el token de la cabecera de autorización.
   const token = req.headers.authorization;
   try {
    const { body }= req
    const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
    const userId = decodedToken.id;// se extraer el id del token
    console.log(userId)
    console.log("body ",body)
    //console.log(body)
    const response = await createFormulario(userId, body)
    return res.status(200).json(response)
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}