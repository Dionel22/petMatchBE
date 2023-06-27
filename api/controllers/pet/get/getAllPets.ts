import { Pet } from "../../../models/Pets";

export const getAllPets = async () => {
  return await Pet.findAll();
};
