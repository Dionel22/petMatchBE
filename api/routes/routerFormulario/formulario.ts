import { Router } from "express";
import { handleAceptarFormulario, handleAllFormulario, handleCreateFormulario, handleRechazarFormulario } from "../../handlers/formulario/handleFormulario";

const formularioRouter = Router()

formularioRouter.get("/", handleAllFormulario)
formularioRouter.get("/:id/aceptar", handleAceptarFormulario)
formularioRouter.get("/:id/rechazar", handleRechazarFormulario)
formularioRouter.post("/", handleCreateFormulario)

export default formularioRouter;