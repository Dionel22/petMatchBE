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

export const adoptPet = async (userId: string, adopcion: any ) => {
    const petId = adopcion.dataValues.petId;
  console.log("adopcion",adopcion.dataValues)
  console.log("userId", userId)
  const pet = await Pet.findOne({
    where: {
      id: petId,
    adoptedUserId: null,
    }
  })

  if (!pet) {
    // La mascota no existe o ya ha sido adoptada
    // Manejar el caso en consecuencia
    console.log('No se encontró la mascota especificado o ya hacido adoptada.');
  } else {
    // La mascota está disponible para adopción
    // Realizar las operaciones necesarias
    console.log(pet);
     /*const [numRowsUpdated] = await Pet.update(
        { adoptedUserId: userId },
        { where: { id: petId } }
      );
      */
     console.log('La columna adoptedUserId se actualizó correctamente.');
  }
}
