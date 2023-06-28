import { Post } from "../../../models/Post";

export const getPostById = (id: string) => {
  const post = Post.findByPk(id);
  if (!post) throw new Error(`The post with the id ${id} doesn't exist`);
  return post;
};
