//import { buscarUsuario } from "./buscarUsuario"
const { Adopcions } = require("../../models/Adopcion")

export const createFormulario = async (body: any) => {
    const id = body.id
    const { name, lastName, email, address, phone, economicSituation, previousPetExperience, petAllergy, properHome, 
        dailyPetTime, 
        over18
        } = body
        console.log(email)
    //const responseID = await buscarUsuario(email)
    //console.log("<--->",responseID)
   const createFormulario = await Adopcions.create({ 
                name, 
                lastName, 
                email, 
                address,
                phone, 
                economicSituation, 
                previousPetExperience,
                 petAllergy, properHome, 
                 dailyPetTime, 
                 over18, 
                 adopcionId: id
                })
            return createFormulario  
}

