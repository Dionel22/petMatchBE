import { Router } from "express";
import { getTypeProduct } from "../../handles/product/handleTypeProduct";

const typeProductRouter = Router();

typeProductRouter.get("/", getTypeProduct)

export default typeProductRouter;