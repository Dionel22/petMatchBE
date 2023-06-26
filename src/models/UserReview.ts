import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export class UserReview extends Model<
  InferAttributes<UserReview>,
  InferCreationAttributes<UserReview>
> {
  declare id: string;
  declare ReviewedId: string;
  declare ReviewerId: string;
}

export default function userReviewModel(sequelize: Sequelize) {
  UserReview.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ReviewedId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: "Users",
          key: "id",
        },
      },
      ReviewerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
    }
  );
}
