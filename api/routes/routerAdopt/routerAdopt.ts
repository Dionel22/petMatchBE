import { Router } from "express";
import { handleAdopt, handleDetailAdopcion } from "../../handlers/adopt/handleAdopt";

const adoptRouter = Router()

adoptRouter.get("/", handleDetailAdopcion)
adoptRouter.get("/:id", handleAdopt)

export default adoptRouter;