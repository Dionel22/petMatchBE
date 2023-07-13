require("dotenv").config();
import {  Request, Response } from "express";
import { getPerfi } from "../../controllers/perfil/controllersPerfil";
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// trae todos los productos y busca por nombre
export const handlePerfil = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
        const userId = decodedToken.userId;// se extraer el id del token
       /* const email = (req.session as any).userEmail
        console.log(req.session)
        console.log("-d-d-d->",email)*/
        const response = await getPerfi(userId)
       
        return res.status(200).json(response)
    } catch (error: any) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}