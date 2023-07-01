import { Router } from "express";
import { getHandlePetTypes } from "../../handlers/pet/handlepetType";

const petTypeRouter = Router();

petTypeRouter.get("/", getHandlePetTypes);

export default petTypeRouter;
