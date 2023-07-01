import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Pet extends Model<
  InferAttributes<Pet>,
  InferCreationAttributes<Pet>
> {
  declare id: string;
  declare name: string;
  declare age: number;
  declare breed: string;
  declare sterilization: boolean;
  declare image: string;
}

export default function petInit(sequelize: Sequelize) {
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
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sterilization: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      updatedAt: false,
    }
  );
}
