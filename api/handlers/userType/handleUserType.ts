import {  Request, Response } from "express";   
import {getAllUserType} from "../../controllers/users/get/getUserType"  

export const getUsersType =  async (req: Request, res: Response) => {
    try {
         const response = await getAllUserType() 
         res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
} 