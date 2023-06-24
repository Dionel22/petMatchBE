import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize';

class UserSellsProduct extends Model<InferAttributes<UserSellsProduct>, InferCreationAttributes<UserSellsProduct>> {
    declare  id: string;
  }

export default function userSellsProductModel (sequelize: Sequelize) {
    UserSellsProduct.init({
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
  return UserSellsProduct;
}