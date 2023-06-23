import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare  id: string;
    declare  taxes: number;
    declare  totalPrice: number;
    declare  buyDate: Date;
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
        totalPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        buyDate: {
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