import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export class Users extends Model<
  InferAttributes<Users>,
  InferCreationAttributes<Users>
> {
  declare id: string;
  declare email: string;
  declare passwordKey: string;
  declare name: string;
  declare address: string;
  declare phone: string;
  declare totalReviews: number;
  declare isActive: boolean;
  declare deletedAt: Date | null;
}

export default function users(sequelize: Sequelize) {
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      passwordKey: {
        field: 'password_key',
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      totalReviews: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,

      },
    },
    {
      sequelize,
      paranoid: true,
      deletedAt: 'deletedAt',

    }
  );
  return Users;
}
