import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes, } from 'sequelize';

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: string;
  declare name: string;
  declare imagen: string;
  declare price: number;
  declare available: number;
  declare averageRating: number;
}

export default function productModel (sequelize: Sequelize) {
    Product.init(
    {
     id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type:  DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type:  DataTypes.STRING,
        allowNull: false,

      },
      price: {
        type:  DataTypes.DOUBLE,
        allowNull: false,

      },
      available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      averageRating: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      }
    },{
    sequelize,
    paranoid: true,
    timestamps: false
  })
  return Product
}