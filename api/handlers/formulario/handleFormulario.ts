require("dotenv").config();
import { Request, Response } from "express";
const { Adopcions } = require("../../models/Adopcion")
import { allFormulario, createFormulario} from "../../controllers/formulario/controllersAdopcion"
import { adoptPet } from "../../controllers/adopt/controllerAdopt";
const { JWT_SECRET } = process.env;//Esta clave es para asegurar la autenticidad del token.
const jwt = require('jsonwebtoken'); //se utiliza para firmar y verificar tokens JWT; 

const nodemailer = require('nodemailer')
const { MAILER_PASSWORD } = process.env
const transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
     user: 'petmatch.noreply@gmail.com',
     pass: MAILER_PASSWORD,
   },
 })

export const handleAllFormulario = async (re: Request, res:Response) => {
   try {
      const response = await allFormulario()
      return res.status(200).json(response)
   } catch (error: any) {
      console.log(error.message);
      res.status(400).json({error: error.message})
   }
}

export const handleAceptarFormulario = async (req: Request, res: Response) => {
   const { id } = req.params;
   //const token = req.headers.authorization;
   try {
     // const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
        // const userId = decodedToken.userId;// se extraer el id del token
      //  console.log(id, userId)

   /* await Adopcions.update(
      { estado: 'aceptado' },
      { where: { id: id } }
    );*/

    const adopcion = await Adopcions.findByPk(id)
   await adoptPet(adopcion)
    if (adopcion) {
      const email = adopcion.email; // Obtener el mail de la adopción encontrada
      console.log('Correo electrónico:', email);
      const mailOptions = {
         from: 'petmatch.noreply@gmail.com',
         to: email,
         subject: 'Adopción aceptada',
         text: '¡Felicidades! Su solicitud de adopción ha sido aceptada.'
         }
      transporter.sendMail(mailOptions, (error:any, info:any) => {
         if (error) { console.log(error)
         } else { console.log('Correo electrónico enviado: ' + info.response)}
      })
   }
    // Enviar una respuesta de exitos
    res.status(200).json({ message: 'Formulario aceptado correctamente' });
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}

export const handleRechazarFormulario = async (req: Request, res: Response) => {
   const { id } = req.params;
   try {
      await Adopcions.update(
         { estado: 'rechazado' },
         { where: { id: id } }
       );
     
       // Enviar una respuesta de rechazo
       res.status(200).json({ message: 'Formulario rechazado correctamente' });
     
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}

export const handleCreateFormulario = async (req: Request, res: Response) => {
   // se extrae el token de la cabecera de autorización.
   //const token = req.headers.authorization;
   try {
    const { body }= req
    //const decodedToken = jwt.verify(token, JWT_SECRET); // Se intenta verificar y decodificar el token
    //const userId = decodedToken.userId;// se extraer el id del token
    //console.log(userId)
    console.log("body ",body)
    //console.log(body)
    const response = await createFormulario( body)
    return res.status(200).json(response)
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}