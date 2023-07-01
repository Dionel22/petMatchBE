const { Pet } = require("../../../models/Pets")
const { PetType } = require("../../../models/PetType")
const { Vaccine } = require("../../../models/Vaccine")

export const getAllPets = async () => {
  return await Pet.findAll({
    include: [{ model: Vaccine, attributes: ["name"], through: { attributes: [] } },{ model:  PetType, attributes: ["type"] }]
  });
};
