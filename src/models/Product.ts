import { DataTypes, Model, Sequelize } from 'sequelize';

interface ProductAttributes {
    id: string;
    name: string;
    imagen: string;
    price: number;
    available: number;
}

class Product extends Model<ProductAttributes> {
    id!: string;
    name!: string;
    imagen!: string;
    price!: number;
    available!: number;
  }

export default function (sequelize: Sequelize) {
    Product.init(
    {
     id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type:  DataTypes.STRING,
      },
      imagen: {
        type:  DataTypes.STRING,
      },
      price: {
        type:  DataTypes.INTEGER,
      },
      available: {
        type: DataTypes.INTEGER,
      }
    },{
    sequelize,
    modelName: 'Product'
  })
  return Product
}
