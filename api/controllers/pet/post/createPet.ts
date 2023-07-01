const { Pet } = require("../../../models/Pets")
const { Vaccine } = require("../../../models/Vaccine")
const { PetType } = require("../../../models/PetType")

export const createPet = async (name: string, age: number , breed: string, sterilization: boolean, image: string, vaccine: ["string", "string"], typeId: string) => {

      const petCreate =  await Pet.create({name, age , breed, sterilization, image});
      const dbase = await Vaccine.findAll({ where: { name: vaccine } });
      await petCreate.setPetType(typeId);
      await petCreate.addVaccine(dbase);
      return petCreate;
};
