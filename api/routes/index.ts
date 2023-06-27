import { Router } from "express";
import petShopRouter from "./routerPetShop";
import typeProductRouter from "./routerTypeProduct";

const router = Router();

router.use("/petShop", petShopRouter)
router.use("/typeProduct", typeProductRouter)

export default router;
