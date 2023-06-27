import { Router } from "express";
import { getHandleAllProduct, getHandleProductDetail, postHandleProduct } from "../../handles/product/handlePetShop";

const productRouter = Router();

productRouter.get("/", getHandleAllProduct);
productRouter.get("/:id", getHandleProductDetail);
productRouter.post("/", postHandleProduct);

export default productRouter;