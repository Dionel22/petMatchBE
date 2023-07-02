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
  declare review: string;
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
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
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
