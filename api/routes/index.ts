import { Router } from "express";
import petShopRouter from "./routerPetShop";
import typeProductRouter from "./routerTypeProduct"; 
import OrderRouter from "./routerOrders"

const router = Router();

router.use("/petShop", petShopRouter)
router.use("/typeProduct", typeProductRouter) 
router.use("/Order", OrderRouter)

export default router;
