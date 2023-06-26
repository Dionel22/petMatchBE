require("dotenv").config();
import { Sequelize } from "sequelize";
import productModel, { Product } from "./models/Product";
import orderModel, { Order } from "./models/Order";
import typeProductModel, { TypeProduct } from "./models/ProductType";
import productReviewsModel, { ProductReviews } from "./models/ProductReviews";
import petInit, { Pet } from "./models/Pets";
import { Vaccine, vaccineInit } from "./models/Vaccine";
import petTypeInit, { PetType } from "./models/PetType";
import { Post, postInit } from "./models/Post";
import users, { Users } from "./models/User";
import usersType, { UsersType } from "./models/UserType";
import reviewsModel, { Reviews } from "./models/Review";
import userReviewModel, { UserReview } from "./models/UserReview";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE } =
  process.env;

const sequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        mode: "require",
      },
    },
  }
);

// ----------------- Definición de los modelos -----------------

productModel(sequelize);
orderModel(sequelize);
typeProductModel(sequelize);
productReviewsModel(sequelize);
users(sequelize);
usersType(sequelize);
reviewsModel(sequelize);
petTypeInit(sequelize);
petInit(sequelize);
vaccineInit(sequelize);
postInit(sequelize);
userReviewModel(sequelize);

// ------------------ Relaciones ---------------------------------

UsersType.hasMany(Users);
Users.belongsTo(UsersType);

Reviews.belongsToMany(Users, { through: UserReview });

Users.belongsToMany(Product, { through: "UserSellsProduct" });
Product.belongsToMany(Users, { through: "UserSellsProduct" });

Users.hasMany(Order);
Order.belongsTo(Users);

Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });

TypeProduct.hasMany(Product);
Product.belongsTo(TypeProduct);

Product.belongsToMany(Reviews, { through: ProductReviews });
Reviews.belongsToMany(Product, { through: ProductReviews });
ProductReviews.belongsTo(Product);
ProductReviews.belongsTo(Reviews);
Product.hasMany(ProductReviews);
Reviews.hasMany(ProductReviews);

Users.hasMany(ProductReviews);
ProductReviews.belongsTo(Users);

Post.belongsToMany(Users, { through: "UserPosts" });
Users.belongsToMany(Post, { through: "UserPosts" });

Post.belongsToMany(Users, { through: "UserRequestsPet" });
Users.belongsToMany(Post, { through: "UserRequestsPet" });

Pet.hasOne(Post);
Post.belongsTo(Pet);

PetType.hasOne(Pet);
Pet.belongsTo(PetType);

Pet.belongsToMany(Vaccine, { through: "PetVaccines" });
Vaccine.belongsToMany(Pet, { through: "PetVaccines" });

export default sequelize;
