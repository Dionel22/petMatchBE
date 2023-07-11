import { Router } from "express";
import { handleCreateFormulario } from "../../handlers/formulario/handleFormulario";

const formularioRouter = Router()

formularioRouter.post("/", handleCreateFormulario)

export default formularioRouter;