require("dotenv").config();
import { Sequelize } from "sequelize";
import productModel, { Product } from "./models/Product";
import orderModel, { Order } from "./models/Order";
import typeProductModel, { TypeProduct } from "./models/TypeProduct";
import userSellsProductModel, {
  UserSellsProduct,
} from "./models/UserSellsProduct";
import productReviewsModel, { ProductReviews } from "./models/ProductReviews";
import orderProductModel, { OrderProduct } from "./models/OrderProducts";
import petInit, { Pet } from "./models/Pets";
import { Vaccine, vaccineInit } from "./models/Vaccine";
import petTypeInit, { PetType } from "./models/PetType";
import { Post, postInit } from "./models/Post";
import users, { Users } from "./models/users";
import usersType, { UsersType } from "./models/usersType";
import reviewsModel, { Reviews } from "./models/Reviews";

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

//son funcion que pasa la instancia de sequelize
productModel(sequelize);
orderModel(sequelize);
orderProductModel(sequelize);
typeProductModel(sequelize);
userSellsProductModel(sequelize);
productReviewsModel(sequelize);
users(sequelize);
usersType(sequelize);
reviewsModel(sequelize);
petTypeInit(sequelize);
petInit(sequelize);
vaccineInit(sequelize);
postInit(sequelize);

//hago la relacion de  mucho a uno
TypeProduct.hasMany(Product);
Product.belongsTo(TypeProduct);

Product.hasMany(ProductReviews);
ProductReviews.belongsTo(Product);

Product.hasMany(UserSellsProduct);
UserSellsProduct.belongsTo(Product);

Users.hasMany(UserSellsProduct);
UserSellsProduct.belongsTo(Users);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Users.hasMany(Order);
Order.belongsTo(Users);

UsersType.hasMany(Users);
Users.belongsTo(UsersType);

Reviews.hasMany(ProductReviews);
ProductReviews.belongsTo(Reviews);

Users.hasMany(ProductReviews);
ProductReviews.belongsTo(Users);

//hago la relacion de  mucho a mucho
Users.belongsToMany(Reviews, { through: "UserReviews" });
Reviews.belongsToMany(Users, { through: "UserReviews" });

// -------- Init of Tables -----------

// -------- Relationships ----------

// Relationship 1-1: Pet has one pet type, i.e a Pet can be a dog, cat, bird
PetType.hasOne(Pet);

//Relationship n-m: A single Pet can have multiple vaccines and vaccines can be applied to more than one pet
Pet.belongsToMany(Vaccine, { through: "PetVaccines" });
Vaccine.belongsToMany(Pet, { through: "PetVaccines" });

export default sequelize;
