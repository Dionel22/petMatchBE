import { Router } from "express";
import { userHandler } from "../../handlers/user/handleUser";

const userRouter = Router();

userRouter.get("/", userHandler.handleAllUsers);
userRouter.get("/:id", userHandler.handleUserById);
userRouter.post("/", userHandler.handleCreateUser);
userRouter.put("/:id/suspend", userHandler.handleSuspendUser)
userRouter.delete("/:id", userHandler.handleDeleteUser);
userRouter.put("/:id/unsuspend", userHandler.handleUnsuspendUser);

export default userRouter;