import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
export class UsersType extends Model<
  InferAttributes<UsersType>,
  InferCreationAttributes<UsersType>
> {
  declare id: string;
  declare name: string;
}

export default function usersTypeModel(sequelize: Sequelize) {
  UsersType.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
    }
  );
  return UsersType;
}
