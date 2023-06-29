import {  Request, Response } from "express";
import { getAllProduct, productDetail, postProduct } from "../../controllers/product/controllerProduct";
interface Producto {
    name: string;
    price: number;
    imagen: string; 
    available: number;
    averageRating: number;
}

// trae todos los productos y busca por nombre
export const getHandleAllProduct = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        const response = await getAllProduct()
        if (name) {
            const searchName = name.toString().toLowerCase()
            let responseName = response.filter((el: Producto) => el.name.toLowerCase().includes(searchName));
            if (responseName.length === 0) return res.status(200).json({ msg: `No product found with the name ${name}.`});
            return res.status(200).json(responseName)
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: error})
    }
}

//trae el detalle
export const getHandleProductDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await productDetail(id)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: error})
    }
}

//crea producto
export const postHandleProduct = async (req: Request, res: Response) => {
    try {
        const { name, imagen, price, available, averageRating, typeId } = req.body;
        const response = await postProduct(name, imagen, price, available, averageRating, typeId)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: error})
    }
}