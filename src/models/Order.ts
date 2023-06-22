import { DataTypes, Model, Sequelize } from 'sequelize';

interface OrderProductAttributes {
    id: string;
    taxes: number;
    totalPrice: number;
    buyDate: Date;
}

class Order extends Model<OrderProductAttributes> {
    id!: string;
    taxes!: number;
    totalPrice!: number;
    buyDate!: Date;
  }

export default function (sequelize: Sequelize) {
    Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        taxes: {
            type: DataTypes.FLOAT,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
        },
        buyDate: {
            type: DataTypes.DATE,
        },
    },{
    sequelize,
    modelName: 'Order'
  })
  return Order
}