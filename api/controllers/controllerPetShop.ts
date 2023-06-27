const { Product, TypeProduct } = require("../db")

export const getAllPetShop = async () => {
    const allPetShop = await Product.findAll({
        include: { model: TypeProduct, attributes: ["name"] }
      });
    return allPetShop;
}

export const postAllPetShop = async (name: string, imagen: string, price: number, available: number, averageRating: number, typeId: string) => {
    const allPetShop = await Product.create({name, imagen, price, available, averageRating});
    await allPetShop.setTypeProduct(typeId)
    return allPetShop;
}