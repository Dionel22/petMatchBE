import { Router } from "express";
import { userAuthenticationHandler } from "../../handlers/userAuthentication/handlerUserAuthentication";

const userRouterAuthentication = Router();

userRouterAuthentication.post("/", userAuthenticationHandler.handlerUserAuthentication);

export default userRouterAuthentication;