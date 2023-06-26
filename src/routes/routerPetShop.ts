import { Router } from "express";
import { getPetShop, postPetShop } from "../handles/handlePetShop";

const petShopRouter = Router();

petShopRouter.get("/", getPetShop)
petShopRouter.post("/", postPetShop)

export default petShopRouter;