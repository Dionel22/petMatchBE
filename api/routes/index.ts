import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct";
import petRouter from "./routerPet/petRouter";

const router = Router();

router.use("/pets", petRouter);
router.use("/product", productRouter);
router.use("/typeProduct", typeProductRouter);

export default router;
