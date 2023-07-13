import { totalPrices } from "./suma";
const { Product } = require("../../models/Product")
const { Users } = require("../../models/User")
const { Order } = require("../../models/Order")
const Sequelize = require('sequelize');
const { Op } = Sequelize;

//detalle del carrito
export const getDetailCarrito = async (id: string) => {
  //console.log(carrito) "3ab1e75b-ce0e-48ea-aecf-ba81b68a9562"
  const infoProduct = await Order.findAll({
    where: {UserId: id},
    include: { model: Product, attributes: ["name", "price"],through: { attributes: [] } }
})

return infoProduct;
}

//guarda los dato a la base de dato
export const postCarrito = async (carrito: any) => {
  // Obtener la fecha actual
  const currentDate = new Date();
  // Suma de productos
  const responseID = await totalPrices(carrito);
  const totalPrice = carrito.totalPrice;
  const purchaseDate = currentDate.toISOString(); // Convertir la fecha a formato ISO string
  const userId = carrito.id;
 console.log("res",responseID)
 console.log(totalPrice)
 console.log(purchaseDate)
 console.log(userId)

  const orderCreate = await Order.create({ totalPrice, purchaseDate });
  const dbase = await Product.findAll({
    where: {
      id: {
        [Op.in]: responseID,
      },
    },
  });
  await orderCreate.setUser(userId);
  await orderCreate.addProduct(dbase);
  //console.log(orderCreate);
  return orderCreate
};
