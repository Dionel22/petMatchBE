import { Router } from "express";
import { handlePerfil } from "../../handlers/perfil/handlePerfil";

const perfilRouter = Router();

perfilRouter.get("/", handlePerfil);

export default perfilRouter;
