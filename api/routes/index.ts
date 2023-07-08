import { Router } from "express";
import productRouter from "./routerProduct/routerProduct";
import typeProductRouter from "./routerProduct/routerTypeProduct";
import petRouter from "./routerPet/petRouter";
import OrderRouter from "./routerOrders";
import vaccineRouter from "./routerVaccine/vaccineRouter";
import postRouter from "./routerPost/postRouter";
import petTypeRouter from "./routerPet/routerpetType";
import userRouter from "./routerUser/userRouter";
import userRouterAuthenticaction from "./routerAuthentication/routerAuthentication";
import userRouterG from "./userRouterG/userRouterG";


const router = Router();

router.use("/posts", postRouter);
router.use("/pets", petRouter);
router.use("/petTypes", petTypeRouter);
router.use("/product", productRouter);
router.use("/typeProduct", typeProductRouter);
router.use("/order", OrderRouter);
router.use("/vaccines", vaccineRouter);
router.use("/user", userRouter);
router.use("/login", userRouterAuthenticaction);
router.use("/login/google", userRouterG);
export default router;
