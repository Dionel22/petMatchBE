import { Router } from "express";  

import {getUsersType} from "../../handlers/userType/handleUserType" 

const userTypeRouter = Router();  

 userTypeRouter.get("/",getUsersType)  


export default userTypeRouter