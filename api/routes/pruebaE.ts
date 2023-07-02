import { Router } from "express";
import { getHandlePruebas } from "../handlers/handlePrueba";

const EnvioRouter = Router();

EnvioRouter.get("/", getHandlePruebas);

export default EnvioRouter;