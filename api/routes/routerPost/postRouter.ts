import { Router } from "express";
import { postHandler } from "../../handlers/post/handlePost";

const postRouter = Router();

postRouter.get("/", postHandler.handleAllPosts);
postRouter.get("/:id", postHandler.handlePostById);
postRouter.post("/", postHandler.handleCreatePost);

export default postRouter;
