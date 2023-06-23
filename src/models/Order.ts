import { DataTypes, Model, Sequelize } from 'sequelize';

interface OrderProductAttributes {
    id: string;
    taxes: number;
    totalPrice: number;
    buyDate: Date;
}

class Order extends Model<OrderProductAttributes> {
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