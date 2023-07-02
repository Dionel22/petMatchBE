import { Users } from "../../../models/User";
import {UsersType} from "../../../models/UsersType";

export const getUserByEmail = async (email: string) => {
  const user = await Users.findOne({where: {email}, 
    include: [{
      model: UsersType,
      attributes: ["name"]
  }] 
});

  if (!user) throw new Error(`The user with id ${email} doesn't exist`);
  return user;
};
