
const { users, usersType } = require("../db")

export const getAllUser = () => { 
    const allUser = users.findAll({
        include: {
            model: usersType, attributes: ["name"]}
        });
    return allUser;
}

export const postAllUser = (name: string, email: string, password_key: string, addres: string, phone:string, type:string) => {
    const allUser = users.create({
        name, email, password_key, addres, phone, type
    });
    allUser.setUserType(type)
    return allUser;
}