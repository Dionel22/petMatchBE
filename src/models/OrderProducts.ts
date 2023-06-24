import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';

class OrderProduct extends Model<InferAttributes<OrderProduct>, InferCreationAttributes<OrderProduct>> {
    declare  id: string;
  }

export default function orderProductModel (sequelize: Sequelize) {
    OrderProduct.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    },{
    sequelize,
    paranoid: true,
    timestamps: false
  })
  return OrderProduct;
}