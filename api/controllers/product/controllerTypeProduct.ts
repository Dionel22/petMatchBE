const { TypeProduct } = require("../../models/ProductType")

export const getAllTypeProduct = async () => {
    const array = ["cama", "plato", "Transportador", "Collar"]
    array.forEach(element => {
        TypeProduct.findOrCreate({ where: {name: element}});
    });
    const responseDB = await TypeProduct.findAll({attributes: ["name", "id"]});
    return responseDB
}

/*
1° cama
2° plato
3° transportador
4° collar
 */