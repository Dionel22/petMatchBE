import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct";

const router = Router();

router.use("/product", productRouter)
router.use("/typeProduct", typeProductRouter)

export default router;
