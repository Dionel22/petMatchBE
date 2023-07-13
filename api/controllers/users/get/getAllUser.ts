import { Users } from "../../../models/User";
import { UsersType } from "../../../models/UsersType";
const { Op } = require('sequelize');

export const getAllUser = async () => { 
    const allUser = await Users.findAll({
        include: {
          model: UsersType,
          where: {
            [Op.or]: [
              { name: 'usuario' }, // Filtras por el tipo "usuario"
              { name: 'organizacion' } // Filtras por el tipo "organizacion"
            ]
          }
        }
      });
    return allUser;
}
//softDelete