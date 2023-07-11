const { Users } = require("../../models/User")
const { Adopcions } = require("../../models/Adopcion")

export const buscarUsuario = async (correo: string) => {
    console.log("..-", correo)
    const response = await Users.findOne({
        where: { email: correo },
        include: Adopcions,
      });
    console.log("jsj",response.dataValues.id)
    return response.dataValues.id
}