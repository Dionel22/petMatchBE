import { Vaccine } from "../../../models/Vaccine";

export const getAllVaccines = async () => {
  return await Vaccine.findAll();
};
