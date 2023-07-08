import { Router } from "express";
import { handleCreateAdopcion, handleDetailAdopcion } from "../../handlers/adopcion/handleAdopcion";

const adopcionRouter = Router()

adopcionRouter.get("/:id", handleDetailAdopcion)
adopcionRouter.post("/", handleCreateAdopcion)

export default adopcionRouter;