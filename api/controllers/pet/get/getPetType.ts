import { PetType } from "../../../models/PetType";

export const getAllPetTypes = async () => {
    const array = ["gato", "perro"]
    array.forEach(element => {
        PetType.findOrCreate({ where: {type: element}});
    });
    const responseDB = await PetType.findAll({attributes: ["type", "id"]});
    return responseDB
}