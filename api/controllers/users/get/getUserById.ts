import { Users } from "../../../models/User";
import {UsersType} from "../../../models/UsersType";

export const getUserById = async (id: string) => {
  const user = await Users.findOne({where: {id}, 
    attributes: {exclude: ['passwordKey']}, // excluyo que aparezca la contraseña del usuario por se confidencial
    include: [{
      model: UsersType,
      attributes: ["name"]
  }] 
});
  //     attributes: {exclude: ['passwordKey']},
  if (!user) throw new Error(`The user with id ${id} doesn't exist`);
  return user;
};
