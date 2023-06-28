import { Router } from "express";
import { handleVaccine } from "../../handlers/vaccine/handleVaccine";

const vaccineRouter = Router();

vaccineRouter.get("/", handleVaccine.handleGetAll);
vaccineRouter.get("/:id", handleVaccine.handleGetById);
vaccineRouter.post("/", handleVaccine.handleCreateVaccine);

export default vaccineRouter;
