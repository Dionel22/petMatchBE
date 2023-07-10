import { Request, Response } from "express";
import { createFormulario} from "../../controllers/formulario/controllersAdopcion"


export const handleCreateFormulario = async (req: Request, res: Response) => {
   try {
    const { body }= req
    //console.log(body)
    const response = await createFormulario(body)
    return res.status(200).json(response)
    } catch (error: any) {
    console.log(error.message)
    res.status(400).json({error: error.message})
   }
}