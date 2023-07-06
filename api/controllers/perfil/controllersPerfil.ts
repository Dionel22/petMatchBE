import { obtenerMascotasRecientes, obtenerProductosRecientes } from "./product_pets"

const { Users } = require("../../models/User")
const { Product } = require("../../models/Product")
const { TypeProduct } = require("../../models/ProductType")
const { UsersType } = require("../../models/UsersType")


export const getPerfi = async (id: string) => {
    const allPetShop = await Users.findOne({
        where: {id: id},
        attributes: ["name","address","email","phone"],
        include: { model: UsersType, attributes: ["name"] }
    })
    const responsePet = await obtenerMascotasRecientes()
    const responseProd = await obtenerProductosRecientes()
    return [allPetShop,responsePet,responseProd];
}
/*
Los usuarios que compren productos,  
quiero 4 arreglos para mascotas en adopcion,
 4 arreglos para articulos producto y a arreglos para articulos vistos 
 recientemente todas con fotos
 */