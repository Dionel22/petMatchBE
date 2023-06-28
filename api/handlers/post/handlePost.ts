import { Request, Response } from "express";
import { postController } from "../../controllers/posts";

const handleAllPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await postController.getAllPosts();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};

const handlePostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await postController.getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};

const handleCreatePost = async (req: Request, res: Response) => {
  try {
    const post = req.body;
    const newPost = await postController.createPost(post);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};

export const postHandler = {
  handleAllPosts,
  handlePostById,
  handleCreatePost,
};
