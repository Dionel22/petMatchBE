const { Pet } = require("../../../models/Pets")
const { PetType } = require("../../../models/PetType")
const { Vaccine } = require("../../../models/Vaccine")

export const getAllPets = async () => {
  const pets = await Pet.findAll({
    where: { adoptedUserId: null },
    order: [["createdAt", "DESC"]],
    include: [{ model: Vaccine, attributes: ["id","name"], through: { attributes: [] } },{ model:  PetType, attributes: ["id","type"] }]
  });
  return pets
};
