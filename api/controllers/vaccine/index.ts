import { getAllVaccines } from "./get/getAllVaccines";
import { getVaccineById } from "./get/getVaccineById";
import { createVaccine } from "./post/createVaccine";

export const vaccineController = {
  getAllVaccines,
  getVaccineById,
  createVaccine,
};
