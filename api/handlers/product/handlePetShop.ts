import {  Request, Response } from "express";
import { getAllProduct, productDetail, postProduct } from "../../controllers/product/controllerProduct";

// trae todos los productos
export const getHandleAllProduct = async (req: Request, res: Response) => {
    try {
        const response = await getAllProduct()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}

//trae el detalle
export const getHandleProductDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await productDetail(id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}

//crea producto
export const postHandleProduct = async (req: Request, res: Response) => {
    try {
        const { name, imagen, price, available, averageRating, typeId } = req.body;
        const response = await postProduct(name, imagen, price, available, averageRating, typeId)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    }
}