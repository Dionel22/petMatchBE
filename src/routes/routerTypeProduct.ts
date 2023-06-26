import { Router } from "express";
import { getTypeProduct } from "../handles/handleTypeProduct";

const typeProductRouter = Router();

typeProductRouter.get("/", getTypeProduct)

export default typeProductRouter;