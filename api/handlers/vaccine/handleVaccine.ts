import { Request, Response } from "express";
import { vaccineController } from "../../controllers/vaccine";

const handleGetAll = async (req: Request, res: Response) => {
  try {
    const vaccines = await vaccineController.getAllVaccines();
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};

const handleGetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vaccine = await vaccineController.getVaccineById(id);
    res.status(200).json(vaccine);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};
const handleCreateVaccine = async (req: Request, res: Response) => {
  try {
    const vaccineCreated = req.body;
    const vaccine = await vaccineController.createVaccine(vaccineCreated);
    res.status(200).json(vaccine);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};

export const handleVaccine = {
  handleGetAll,
  handleGetById,
  handleCreateVaccine,
};
