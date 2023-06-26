require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import productModel from "./models/Product";
import orderModel from "./models/Order";
import typeProductModel from "./models/TypeProduct";
import userSellsProductModel from "./models/UserSellsProduct";
import productReviewsModel from "./models/ProductReviews";
import orderProductModel from "./models/OrderProducts";
import petInit, { Pet } from "./models/Pets";
import { Vaccine, vaccineInit } from "./models/Vaccine";
import petTypeInit, { PetType } from "./models/PetType";
import { Post, postInit } from "./models/Post";
import users from "./models/users";
import usersType from "./models/usersType";
import reviewsModel from "./models/Reviews";

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

//saco los modelos de sequelize
const {
  Product,
  Order,
  TypeProduct,
  UserSellsProduct,
  ProductReviews,
  OrderProduct,
  Users,
  UsersType,
  Reviews,
} = sequelize.models;

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

petTypeInit(sequelize);
petInit(sequelize);
vaccineInit(sequelize);
postInit(sequelize);

// -------- Relationships ----------

// Relationship 1-1: Pet has one pet type, i.e a Pet can be a dog, cat, bird
PetType.hasOne(Pet);

//Relationship n-m: A single Pet can have multiple vaccines and vaccines can be applied to more than one pet
Pet.belongsToMany(Vaccine, { through: "PetVaccines" });
Vaccine.belongsToMany(Pet, { through: "PetVaccines" });

export default sequelize;
