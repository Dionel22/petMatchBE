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

export default function  orderModel (sequelize: any) {
    Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        taxes: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        buyDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },{
    sequelize,
    modelName: 'Order',
    timestamps: false
  })
  return Order
}