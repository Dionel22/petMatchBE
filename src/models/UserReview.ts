import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { Users } from "./users";
import { Reviews } from "./Reviews";

export class UserReview extends Model<
  InferAttributes<UserReview>,
  InferCreationAttributes<UserReview>
> {
  declare id: string;
  declare UserId: string;
  declare ReviewerId: string;
  declare ReviewId: string;
}

export default function userReviewModel(sequelize: Sequelize) {
  UserReview.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: Users,
          key: "id",
        },
      },
      ReviewerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: Users,
          key: "id",
        },
      },
      ReviewId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: Reviews,
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
