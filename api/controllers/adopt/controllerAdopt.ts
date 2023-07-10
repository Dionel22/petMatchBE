const { Pet } = require("../../models/Pets")
const { Vaccine } = require("../../models/Vaccine")
const { PetType } = require("../../models/PetType")

export const detailAdopcion = async (id: string) => {
    const responsePet = await Pet.findAll({ 
        where: { adoptedUserId: id },
        order: [["createdAt", "DESC"]],
        include: [{ model: Vaccine, attributes: ["name"], through: { attributes: [] } },{ model:  PetType, attributes: ["type"] }]
    })
    return responsePet
}

export const adoptPet = async (userId: string, petId: string ) => {
    const [numRowsUpdated] = await Pet.update(
        { adoptedUserId: userId },
        { where: { id: petId } }
      );
      
      if (numRowsUpdated > 0) {
        console.log('La columna adoptedUserId se actualizó correctamente.');
      } else {
        console.log('No se encontró la mascota con el ID especificado.');
      }
}
