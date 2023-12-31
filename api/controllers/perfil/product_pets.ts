const { Pet } = require("../../models/Pets")
const { Product } = require("../../models/Product")

export const obtenerMascotasRecientes = async () => {
  try {
    const mascotasRecientes = await Pet.findAll({
        order: [["createdAt", "DESC"]],
        limit: 4,
      })
    return mascotasRecientes
  } catch (error) {
    console.error("Error al obtener las mascotas recientes:", error);
  }
};

export const obtenerProductosRecientes = async () => {
    try {
      const productosRecientes = await Product.findAll({
        order: [['createdAt', 'DESC']],
        limit: 4,
      });
      return productosRecientes
    } catch (error) {
      console.error('Error al obtener los productos recientes:', error);
    }
  };