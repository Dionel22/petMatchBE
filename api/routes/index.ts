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
import userTypeRouter from "./routerUserType/routerUserType"   
import usernameRouter from "./routerUserType/routerUserTypename" 
import perfilRouter from "./routerPerfil/perfilRouter";
import formularioRouter from "./routerFormulario/formulario";
import adoptRouter from "./routerAdopt/routerAdopt";
import ApiRouter from "./routerStripe/routerStripe";
import CarritoRouter from "./routerCarrito/routerCarrito";



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
router.use("/usertype",userTypeRouter)   
router.use("/typeuser",usernameRouter)
router.use("/perfil", perfilRouter);
router.use("/forms", formularioRouter);
router.use("/adopts", adoptRouter);
router.use("/api/checkout", ApiRouter);
router.use("/carts", CarritoRouter);


export default router;
