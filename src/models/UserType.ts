import { Model, Optional } from 'sequelize' 
const { Sequelize, DataTypes } = require("sequelize"); 
const sequelize = new Sequelize("sqlite::memory:")  

interface UserTypeAttributes {
    type_id: string; 
    name: string
} 
type UserTypeCreationAttributes = Optional<UserTypeAttributes, 'type_id'>; 

const UserType: Model< 
  UserTypeAttributes,
  UserTypeCreationAttributes
> = sequelize.define( 
    'UserType',{ 
        type_id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true, 
        }, 
        name: {
            type: DataTypes.STRING, 
        }

    }

) 
export default UserType