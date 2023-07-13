require("dotenv").config();
import {  Request, Response } from "express";
import { getDetailCarrito, postCarrito } from "../../controllers/carrito/controllerCarrito";
const { JWT_SECRET } = process.env;//Esta clave es para asegurar la autenticidad del token.
const jwt = require('jsonwebtoken'); //se utiliza para firmar y verificar tokens JWT; 

export const handleDetailCarrito = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
   // console.log("dd",req.session)
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
        const userId = decodedToken.id;// se extraer el id del token
        const response = await getDetailCarrito(userId)
        return res.status(200).json(response)
    } catch (error) {
       console.log(error)
       res.status(400).json({msg: error})
    }
}

export const handleCarrito = async (req: Request, res: Response) => {
    const carrito = req.body;
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
        const userId = decodedToken.id;// se extraer el id del token
        const response = await postCarrito(userId, carrito)
        res.status(200).json(response)

    } catch (error: any) {
       console.log("error",error.message)
       res.status(400).json({msg: error.message})
    }
}
