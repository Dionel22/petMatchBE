import { Router } from "express";
import { handleAdopt, handleDetailAdopcion } from "../../handlers/adopt/handleAdopt";

const adoptRouter = Router()

adoptRouter.get("/:id", handleDetailAdopcion)
adoptRouter.post("/", handleAdopt)

export default adoptRouter;