import { adoptarPet } from "./adoptaPet";
import { buscarRegitrado } from "./buscar"
const { Adopcions } = require("../../models/Adopcion")
const { Pet } = require("../../models/Pets")
const { Vaccine } = require("../../models/Vaccine")
const { PetType } = require("../../models/PetType")

export const createAdopcion = async (body: any) => {
       const id = body.adopcionId;
       const { 
        name, 
        lastName, 
        email, 
        address, 
        phone, 
        economicSituation, 
        previousPetExperience, 
        petAllergy, 
        properHome, 
        dailyPetTime, 
        over18, 
        adopcionId 
        } = body
        const response = await buscarRegitrado(id)
        if (!response) {
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
                 adopcionId 
                })
            await adoptarPet(id, body.petId)
            return createFormulario
        }
        const responseAdoptados = await adoptarPet(id, body.petId)
   return[response, responseAdoptados]
}

export const detailAdopcion = async (id: string) => {
    const responsePet = await Pet.findAll({ 
        where: { adoptedUserId: id },
        include: [{ model: Vaccine, attributes: ["name"], through: { attributes: [] } },{ model:  PetType, attributes: ["type"] }]
    })
    return responsePet
}