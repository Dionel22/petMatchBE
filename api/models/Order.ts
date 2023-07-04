import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export class Order extends Model<
  InferAttributes<Order>,
  InferCreationAttributes<Order>
> {
  declare id: string;
  declare totalPrice: number;
  declare  purchaseDate: Date;
}

export default function orderModel(sequelize: Sequelize) {
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    },
    {
      sequelize,
      paranoid: true,
    }
  );
  return Order;
}
