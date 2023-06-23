import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";

export class PetType extends Model<
  InferAttributes<PetType>,
  InferCreationAttributes<PetType>
> {
  declare id: string;
  declare type: string;
}

export const PetTypeInit = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
};
