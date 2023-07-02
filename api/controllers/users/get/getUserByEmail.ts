import { Users } from "../../../models/User";
import {UsersType} from "../../../models/UsersType";

export const getUserByEmail = async (email: string) => {
  const user = await Users.findOne({where: {email}, 
    include: [{
      model: UsersType,
      attributes: ["name"]
  }] 
});
  return user;
};
