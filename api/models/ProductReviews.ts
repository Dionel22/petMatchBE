import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export class ProductReviews extends Model<
  InferAttributes<ProductReviews>,
  InferCreationAttributes<ProductReviews>
> {
  declare id: string;
}

export default function productReviewsModel(sequelize: Sequelize) {
  ProductReviews.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: false,
    }
  );
  return ProductReviews;
}
