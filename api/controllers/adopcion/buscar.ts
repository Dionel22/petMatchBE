const { Adopcions } = require("../../models/Adopcion")
const { Users } = require("../../models/User")

export const buscarRegitrado = async (id: string) => {
    const response = await Adopcions.findOne({
        where: {adopcionId: id}
    })
console.log("buscarFor",response)
  return response || null
}