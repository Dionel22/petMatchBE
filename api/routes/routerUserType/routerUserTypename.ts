import { Router } from "express";   
import {UserTypename} from "../../handlers/userType/routerUserTypename" 

const usernameRouter = Router();   

usernameRouter.get("/",UserTypename)

export default usernameRouter