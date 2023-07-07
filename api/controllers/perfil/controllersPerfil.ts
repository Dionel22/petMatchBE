import { obtenerMascotasRecientes, obtenerProductosRecientes } from "./product_pets"
const { Users } = require("../../models/User")
const { UsersType } = require("../../models/UsersType")


export const getPerfi = async (id: string) => {
    const allPetShop = await Users.findOne({
        where: {id: id},
        attributes: ["name","address","email","phone"],
        include: { model: UsersType, attributes: ["name"] }
    })
    const responsePet = await obtenerMascotasRecientes()
    const responseProd = await obtenerProductosRecientes()
    return {usuario: allPetShop, pets:responsePet, product: responseProd};
}