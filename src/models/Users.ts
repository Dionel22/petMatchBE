import { Model, Optional } from 'sequelize'
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:")  

interface UsersAttributes {
    user_id: string; 
    email: String; 
    password_key : string; 
    name: string; 
    address: string; 
    phone: string
} 

type UsersCreationAttributes = Optional<UsersAttributes, 'user_id'>; 

const Users : Model< 
   UsersAttributes,  
   UsersCreationAttributes
> =  sequelize.define(
    'Users', { 
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,  
            allowNull: false,
        }, 
     
        email: {
            type: DataTypes.STRING, 
        }, 

        password_key: {
            type: DataTypes.STRING
        },
        name: { 
            type: DataTypes.STRING, 
            allowNull: false,

        },
        address: { 
            type: DataTypes.STRING

        },
        phone: { 
            type: DataTypes.STRING

        }

    }
) 
export default Users 