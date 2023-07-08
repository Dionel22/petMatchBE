const { Pet } = require("../../models/Pets")

export const adoptarPet = async (userId: string,petId: string ) => {
    const [numRowsUpdated] = await Pet.update(
        { adoptedUserId: userId },
        { where: { id: petId } }
      );
      
      if (numRowsUpdated > 0) {
        console.log('La columna adoptedUserId se actualizó correctamente.');
        return "hola"
      } else {
        console.log('No se encontró la mascota con el ID especificado.');
        return "holaas"
      }
}