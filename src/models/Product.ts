import { DataTypes, Model, Sequelize } from 'sequelize';

interface ProductAttributes {
    id: string;
    name: string;
    imagen: string;
    price: number;
    available: number;
}

class Product extends Model<ProductAttributes> {
  declare id: string;
  declare name: string;
  declare imagen: string;
  declare price: number;
  declare available: number;
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
         validate: {
          min: 0,
          msg: "the minimum price is greater equal to 0"
        }
      },
      available: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          msg: "the minimum available is greater equal to 0"
        }
      }
    },{
    sequelize,
    paranoid: true,
    timestamps: false
  })
  return Product
}