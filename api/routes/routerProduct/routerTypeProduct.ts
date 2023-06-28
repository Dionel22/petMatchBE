import { Router } from "express";
import { getTypeProduct } from "../../handlers/product/handleTypeProduct";

const typeProductRouter = Router();

typeProductRouter.get("/", getTypeProduct);

export default typeProductRouter;
