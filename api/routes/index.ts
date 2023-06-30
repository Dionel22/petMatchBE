import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct"; 
import OrderRouter from "./routerOrders"
import registerUser from "./routerRegisterUser";

const router = Router();

router.use("/product", productRouter)
router.use("/typeProduct", typeProductRouter) 
router.use("/Order", OrderRouter)
router.use("/register", registerUser)

export default router;
