import { Model, Optional } from 'sequelize'  
const { Sequelize, DataTypes } = require("sequelize");  
const sequelize = new Sequelize("sqlite::memory:")   

interface ReviewsAttributes{
    id: string;
    totalScore: number
} 
type ReviewsCreationAttributes = Optional<ReviewsAttributes,'id'>; 

const Reviews: Model<  
   ReviewsAttributes,
   ReviewsCreationAttributes    
> = sequelize.define(
    'Reviews',{
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true, 
        },  
        totalScore: {
            type: DataTypes.INTEGER
        }
    }
) 
export default Reviews