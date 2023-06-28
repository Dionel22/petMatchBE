import { getAllPosts } from "./get/getAllPosts";
import { getPostById } from "./get/getPostById";
import { createPost } from "./post/createPost";

export const postController = {
  getAllPosts,
  getPostById,
  createPost,
};
