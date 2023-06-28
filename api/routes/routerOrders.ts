import { Router } from "express";
import { posAlltOrde, getOrders } from "../handlers/handleOrders";

const OrderRouter = Router();

OrderRouter.post("/", posAlltOrde);
OrderRouter.get("/", getOrders);

export default OrderRouter;
