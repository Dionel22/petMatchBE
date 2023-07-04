import { Request, Response } from "express";
import { petController } from "../../controllers/pet";

interface Producto {
  name: string;
  age: number;
  breed: string;
  sterilization: boolean;
  image: string;
  vaccine: [string];
  typeId: string;
}

const handleAllPets = async (req: Request, res: Response) => {
  try {
    const response = await petController.getAllPets();
    const { name } = req.query
    if (name) {
      const searchName = name.toString().toLowerCase()
      let responseName = response.filter((el: Producto) => el.name.toLowerCase().includes(searchName));
      if (responseName.length === 0) return res.status(200).json({ message: `No pets found with the name ${name}.`});
      return res.status(200).json(responseName)
  }
  return res.status(200).json(response)
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
    const { name, age, breed, sterilization, image, vaccine, typeId } = req.body;
    const response = await petController.createPet(name, age , breed, sterilization, image, vaccine, typeId);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const petHandler = {
  handleAllPets,
  handlePetsById,
  handleCreatePets,
};
