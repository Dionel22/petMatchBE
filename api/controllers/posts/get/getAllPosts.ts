import { Post } from "../../../models/Post";

export const getAllPosts = async () => {
  return await Post.findAll();
};
