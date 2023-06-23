import { DataTypes, Model, Sequelize } from 'sequelize';

interface TypeProductAttributes {
    id: string;
    name: string;
}

class TypeProduct extends Model<TypeProductAttributes> {
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
    timestamps: false
  })
  return TypeProduct
}