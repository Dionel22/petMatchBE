import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';

class TypeProduct extends Model<InferAttributes<TypeProduct>, InferCreationAttributes<TypeProduct>> {
    declare  id: string;
    declare  name: string;
  }

export default function typeProductModel (sequelize: Sequelize) {
    TypeProduct.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
    sequelize,
    paranoid: true,
    timestamps: false
  })
  return TypeProduct
}