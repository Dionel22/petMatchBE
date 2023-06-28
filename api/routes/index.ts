import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct"; 
import OrderRouter from "./routerOrders"

const router = Router();

router.use("/product", productRouter)
router.use("/typeProduct", typeProductRouter) 
router.use("/Order", OrderRouter)

export default router;
