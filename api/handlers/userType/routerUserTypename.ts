import {  Request, Response } from "express";  
import{UsersType} from "../../models/UsersType"
export const UserTypename = async (req: Request, res: Response) => {  
    const name = req.query.name as string  
    if (!name) {
        return res.status(400).json({ error: 'Name parameter is required' });
      }
    try {
       const type = await UsersType.findAll({where:{name:name}}) 
       res.json(type);
    } catch (error) {  
        res.status(400).json({msg: error})
    }
}