import { Router } from "express";
import { googleAuthenticationHandler } from "../../handlers/handlerAuthGoogle/handlerAuthGoogle";

const userRouterG = Router();

userRouterG.post("/", googleAuthenticationHandler);

export default userRouterG;