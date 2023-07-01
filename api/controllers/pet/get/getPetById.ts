import { Pet } from "../../../models/Pets";
const { PetType } = require("../../../models/PetType")
const { Vaccine } = require("../../../models/Vaccine")

export const getPetById = async (id: string) => {
  const pet = await Pet.findByPk(id,{
    include: [{ model: Vaccine, attributes: ["name"], through: { attributes: [] } },{ model:  PetType, attributes: ["type"] }]
  });
  if (!pet) throw new Error(`The pet with id ${id} doesn't exist`);
  return pet;
};
