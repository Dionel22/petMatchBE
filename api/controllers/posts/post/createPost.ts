import { Post } from "../../../models/Post";

export const createPost = async (post: Post) => {
  if (!post.details || post.details === "")
    throw new Error("The post should contain details to publish");
  return await Post.create(post);
};
