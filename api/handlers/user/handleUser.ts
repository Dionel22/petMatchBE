import { Request, Response } from "express";
import { userController } from "../../controllers/users/indexUser";

// usuarios
const handleAllUsers = async (req: Request, res: Response) => {
    try {
        const response = await userController.getAllUser();
        res.status(200).json(response)
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

// por id
const handleUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await userController.getUserById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error });
    }
};

// por email
const handleUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const response = await userController.getUserByEmail(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// creacion del user
const handleCreateUser = async (req: Request, res: Response) => {
    try {
      const { body  } = req;
      const response = await userController.postUser(
         body?.name, 
         body?.passwordKey, 
         body?.email,
         body?.address, 
         body?.phone,
         body?.type
      );
      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  export const userHandler = {
    handleAllUsers,
    handleUserById,
    handleUserByEmail,
    handleCreateUser,
  };
