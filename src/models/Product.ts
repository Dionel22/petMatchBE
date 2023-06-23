import { DataTypes, Model, Sequelize } from 'sequelize';

interface ProductAttributes {
    id: string;
    name: string;
    imagen: string;
    price: number;
    available: number;
    type: string;
}

class Product extends Model<ProductAttributes> {
  declare id: string;
  declare name: string;
  declare imagen: string;
  declare price: number;
  declare available: number;
  declare type: string;
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
        validate: {
          isUrl: true,
          msg: "It has to be a valid URL."
        }
      },
      price: {
        type:  DataTypes.DOUBLE,
        allowNull: false,
      },
      available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
    sequelize,
    timestamps: false
  })
  return Product
}