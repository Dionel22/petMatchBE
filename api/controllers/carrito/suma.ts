const { Product } = require("../../models/Product")
const Sequelize = require('sequelize');
const { Op } = Sequelize;


export const totalPrices = async (body: any) => {
   // Recorre el arreglo de productos en el carrito
   const arrayId = []
   for (const item of body.carrito) {
    const { id, cantidad } = item;
    arrayId.push(id)
    // Actualiza la disponibilidad del producto en la base de datos
   await Product.decrement(
      'available', // Nombre del campo a decrementar
      {
        by: cantidad, // Cantidad a restar
        where: { id },
      }
    );
  }
  console.log('Disponibilidad de productos actualizada correctamente');
  return  arrayId;
}