const { Product } = require("../../models/Product")
const { TypeProduct } = require("../../models/ProductType")

export const getAllProduct = async () => {
    const allPetShop = await Product.findAll({
        order: [["createdAt", "DESC"]],
        include: { model: TypeProduct, attributes: ["name"] }
    });
    return allPetShop;
}

export const productDetail = async (id: string) => {
    const infoProduct = await Product.findByPk(id,{
        attributes: ["id","name","imagen", "price", "available", "averageRating"],
        include: { model: TypeProduct, attributes: ["name"] }
    })
    
    return infoProduct;
}

export const postProduct = async (name: string, imagen: string, price: number, available: number, averageRating: number, typeId: string) => {
    const allPetShop = await Product.create({name, imagen, price, available, averageRating});
    await allPetShop.setTypeProduct(typeId)
    return allPetShop;
}