import { getAllPets } from "./get/getAllPets";
import { getPetById } from "./get/getPetById";
import { createPet } from "./post/createPet";

export const petController = {
  getAllPets,
  getPetById,
  createPet,
};
