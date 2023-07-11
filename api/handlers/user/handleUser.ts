import { Request, Response } from "express";
import { userController } from "../../controllers/users/indexUser";

const handleAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await userController.getAllUser();
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const handleUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await userController.getUserById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const handleUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const response = await userController.getUserByEmail(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const handleCreateUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
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

//Eliminar usuario
const handleDeleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userController.deleteUser(userId);

    if (deletedUser) {
      res.status(200).json({ message: "Usuario eliminado." })
    } else {
      res.status(404).json({ message: "Usuario no encontrado." })
    }
  } catch (error: any){
    console.error(error);
    res.status(500).json({message: "Error al eliminar al usuario."})
  }
};

//Suspender usuario
const handleSuspendUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const suspendedUser = await userController.suspendUser(userId);

    if (suspendedUser) {
      res.status(200).json({message: "Usuario suspendido."})
    } else {
      res.status(404).json({message: "Usuario no encontrado."})
    }
  } catch (error: any) {
    console.error(error)
    res.status(500).json({message: "Error al suspender al usuario."})
  }
}

//Quitar suspension al usuario
const handleUnsuspendUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const unSuspendedUser = await userController.unSuspendUser(userId);

    if (unSuspendedUser) {
      res.status(200).json({message: "Se quito la suspensión del usuario."})
    } else {
      res.status(404).json({message: "Usuario no encontrado."})
    }
  } catch (error: any) {
    console.error(error)
    res.status(500).json({message: "Error al quitar la suspensión."})
  }
}

export const userHandler = {
  handleAllUsers,
  handleUserById,
  handleUserByEmail,
  handleCreateUser,
  handleDeleteUser,
  handleSuspendUser,
  handleUnsuspendUser,
};
