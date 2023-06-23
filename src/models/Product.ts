import { DataTypes, Model } from 'sequelize';

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

export default function productModel (sequelize: any) {
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
        type:  DataTypes.INTEGER,
        allowNull: false,
      },
      available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },{
    sequelize,
    modelName: 'Product',
    timestamps: false
  })
  return Product
}