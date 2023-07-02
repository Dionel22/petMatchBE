import { Users } from "../../../models/User";
import { UsersType } from "../../../models/UsersType";

export const getAllUser = async () => { 
    const allUser = await Users.findAll({
        include: {
            model: UsersType}
        });
    return allUser;
}
