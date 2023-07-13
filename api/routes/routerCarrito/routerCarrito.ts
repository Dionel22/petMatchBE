import { Router } from "express";
import { handleCarrito, handleDetailCarrito } from "../../handlers/carrito/handleCarrito";

const CarritoRouter = Router();

CarritoRouter.get("/:id", handleDetailCarrito);
CarritoRouter.post("/", handleCarrito);

export default CarritoRouter;
