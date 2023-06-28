import { Router } from "express";
import { petHandler } from "../../handlers/pet/handlePet";

const petRouter = Router();

petRouter.get("/", petHandler.handleAllPets);
petRouter.get("/:id", petHandler.handlePetsById);
petRouter.post("/", petHandler.handleCreatePets);

export default petRouter;
