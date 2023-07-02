import { Users } from "../../../models/User";

export const getUserById = async (id: string) => {
  const user = await Users.findByPk(id);
  if (!user) throw new Error(`The user with id ${id} doesn't exist`);
  return user;
};
