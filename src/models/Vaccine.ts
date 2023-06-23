import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";

export class Vaccine extends Model<
  InferAttributes<Vaccine>,
  InferCreationAttributes<Vaccine>
> {
  declare id: string;
  declare name: string;
}

export const VaccineInit = {
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
};
