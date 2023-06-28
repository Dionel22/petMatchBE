import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct";
import petRouter from "./routerPet/petRouter";
import OrderRouter from "./routerOrders";

const router = Router();

router.use("/pets", petRouter);
router.use("/product", productRouter);
router.use("/typeProduct", typeProductRouter);
router.use("/Order", OrderRouter);

export default router;
