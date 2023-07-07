import {UsersType} from "../../../models/UsersType" 

// mostrar los tipos de usuarios  

export const getAllUserType = async () => { 
    const allUserType = await UsersType.findAll() 
    console.log("allUserType",allUserType)
    return allUserType

}