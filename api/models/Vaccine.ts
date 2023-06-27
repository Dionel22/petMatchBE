import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Vaccine extends Model<
  InferAttributes<Vaccine>,
  InferCreationAttributes<Vaccine>
> {
  declare id: string;
  declare name: string;
}

export const vaccineInit = (sequelize: Sequelize) => {
  Vaccine.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      updatedAt: false,
    }
  );
};
