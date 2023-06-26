import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
export class Reviews extends Model<
  InferAttributes<Reviews>,
  InferCreationAttributes<Reviews>
> {
  declare id: string;
  declare totalScore: number;
}

export default function reviewsModel(sequelize: Sequelize) {
  Reviews.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalScore: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
    }
  );
  return Reviews;
}
