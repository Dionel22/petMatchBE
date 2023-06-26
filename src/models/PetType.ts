import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
} from "sequelize";

export class PetType extends Model<
  InferAttributes<PetType>,
  InferCreationAttributes<PetType>
> {
  declare id: string;
  declare type: string;
}

export default function petTypeInit(sequelize: Sequelize) {
  PetType.init(
    {
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
    },
    {
      sequelize,
      paranoid: true,
      updatedAt: false,
    }
  );
}
