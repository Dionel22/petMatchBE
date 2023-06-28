import { Request, Response } from "express";
import { petController } from "../../controllers/pet";

const handleAllPets = async (req: Request, res: Response) => {
  try {
    const response = await petController.getAllPets();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const handlePetsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await petController.getPetById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const handleCreatePets = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await petController.createPet(body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const petHandler = {
  handleAllPets,
  handlePetsById,
  handleCreatePets,
};
