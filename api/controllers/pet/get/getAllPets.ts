const { Pet } = require("../../../models/Pets")
const { PetType } = require("../../../models/PetType")
const { Vaccine } = require("../../../models/Vaccine")

export const getAllPets = async () => {
  const pets = await Pet.findAll({
    include: [{ model: Vaccine, attributes: ["name"], through: { attributes: [] } },{ model:  PetType, attributes: ["type"] }]
  });
  const respuesta = pets.map((element: any) => {
   const vaccine = element.dataValues.Vaccines.map((e: any) => {
      return e.dataValues.name
    })
    return {
      id: element.dataValues.id,
      name: element.dataValues.name,
      age: element.dataValues.age,
     breed: element.dataValues.breed,
     sterilization: element.dataValues.sterilization,
     image: element.dataValues.image, 
     vaccines: vaccine
    }
  });
  return respuesta
};
