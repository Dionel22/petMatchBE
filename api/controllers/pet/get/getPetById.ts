import { Pet } from "../../../models/Pets";

export const getPetById = async (id: string) => {
  const pet = await Pet.findByPk(id);
  if (!pet) throw new Error(`The pet with id ${id} doesn't exist`);
  return pet;
};
