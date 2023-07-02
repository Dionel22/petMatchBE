const { Users } = require ("../../../models/User");
const { UsersType } = require("../../../models/UsersType");
const { v4: uuidv4 } = require('uuid');
import bcrypt from 'bcrypt';
import { sendEmail } from '../../../utils/mailer';
import { getUserByEmail } from '../get/getUserByEmail';

export const postUser = async (
    name:string, 
    passwordKey: string, 
    email: string,
    address: string,
    phone: string,
    type: string) => {
    if (!name || name === "") throw new Error("The user must have a name");
    if (!passwordKey || passwordKey === "") throw new Error("The user must have a password");
    if (!email ||email === "") throw new Error("The user must have a email");
    if (!address || address === "") throw new Error("The user must have a address");
    if (!phone || phone === "") throw new Error("The user must have a phone");
    if (!type || type === "") throw new Error("The user must have a type");

    const userAlreadyExist = await getUserByEmail(email);

    if(userAlreadyExist) {
        throw new Error("A user with the same email already exists.")
    }

    const user = await Users.create( { 
        id: uuidv4(),
        name, 
        passwordKey: await bcrypt.hash(passwordKey, 10), 
        email, 
        address, 
        phone,  
        totalReviews:0.0
    });

    const userType = await UsersType.findOne({where: {name: type}})
    if (userType) {   
        console.log(userType) 
        await user.setUsersType(userType)
        const finalUser = await user.save(); 
        sendEmail(finalUser.email);
        return finalUser;
    } else {
        throw new Error("The given type is not accepted, must be admin or client or organization")
    }

}