// const mercadopago = require("mercadopago"); 
// require("dotenv").config(); 
// const { jwt } = require("jsonwebtoken");   
// const { JWT_SECRET } = process.env 
// import {Users} from "../../models/User"   
// import {  Request, Response } from "express";

// mercadopago.configure({
//     access_token: "TEST-3526354496795462-071115-d927ca1389fa64170720c3cc27a9a21b-1421333242"
// }) 

// export const handlerMercadoPago = async (req: Request, res: Response) =>{
//     const {body} = req.body 
//     const token = req.headers.authorization; 
//     try { 
//         const decodedToken = jwt.verify(token, JWT_SECRET)  
//         const userId = decodedToken.id
//         if(!userId) throw Error("No estas logueado"); 

//         const user = await Users.findByPk(userId) 

//         const items = body.map((item : any) => ({
//             name: item.name,
//             quantity: item.cantidadCarrito,
//             currency_id: "ARS",
//             unit_price: item.price,
//           }));
        
//         const preference = {}


//     } catch (error) {
        
//     }
// }