import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { sequelize } from "../db";

class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>> {
  declare id: string;
  declare name: string;
  declare age: number;
  declare breed: string;
  declare sterilization: boolean;
  declare image: string;
}

Pet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.DOUBLE,
      validate: {
        min: 0.0,
        max: 20.0,
      },
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    sterilization: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: true,
    updatedAt: false,
  }
);
