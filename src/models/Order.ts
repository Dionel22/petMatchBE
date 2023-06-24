import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare  id: string;
    declare  taxes: number;
    declare  price: number;
    declare  totalPrice: number;
    declare  purchaseDate: Date;
  }

export default function  orderModel (sequelize: Sequelize) {
    Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        taxes: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
    },{
    sequelize,
    paranoid: true,
    timestamps: false
  })
  return Order
}