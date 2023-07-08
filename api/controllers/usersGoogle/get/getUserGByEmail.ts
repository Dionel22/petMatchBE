import { Users } from "../../../models/User";
import {UsersType} from "../../../models/UsersType";

export const getUserGByEmail = async (email: string) => {
  const user = await Users.findOne({where: {email},
    attributes: {exclude: ['passwordKey']}, // excluyo que aparezca la contraseña del usuario por se confidencial 
    include: [{
      model: UsersType,
      attributes: ["name"]
  }] 
});
  return user;
};
