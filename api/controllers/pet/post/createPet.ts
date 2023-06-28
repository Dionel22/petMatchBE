import { Pet } from "../../../models/Pets";

export const createPet = async (pet: Pet) => {
  if (!pet.name || pet.name === "") throw new Error("The pet must have a name");
  if (!pet.age) throw new Error("The pet must have an age");
  if (pet.age < 0) throw new Error("The pet must have a positive age");
  if (!pet.breed || pet.breed === "")
    throw new Error("The pet must have a breed");
  if (pet.sterilization === undefined || pet.sterilization === null)
    pet.sterilization = false;
  if (!pet.image || pet.image === "")
    throw new Error("The pet must have an image which must be an URL");
  return await Pet.create(pet);
};
