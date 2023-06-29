require("dotenv").config();
import { Sequelize, Model } from "sequelize";

// ------- Ric -----------------------------
import productModel from "./models/Product";
import orderModel from "./models/Order";
import typeProductModel from "./models/TypeProduct";
import userSellsProductModel from "./models/UserSellsProduct";
import productReviewsModel from "./models/ProductReviews";
import orderProductModel from "./models/OrderProducts";
// -----------------------------------------

// ------- Nel -----------------------------
import petInit, { Pet } from "./models/Pets";
import { Vaccine, vaccineInit } from "./models/Vaccine";
import petTypeInit, { PetType } from "./models/PetType";
import { Post, postInit } from "./models/Post";
// -----------------------------------------

// ------- Yo ------------------------------
import users from "./models/users";
import usersType from "./models/usersType";
import reviews from "./models/reviews";
// -----------------------------------------

const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;


const sequelize = new Sequelize(
  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`,
  {
    dialect: "postgres",
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        mode: "require",
      },
    },
  }
);

//son funcion que pasa la instancia de sequelize

// - rick -------
productModel(sequelize);
orderModel(sequelize);
orderProductModel(sequelize);
typeProductModel(sequelize);
userSellsProductModel(sequelize);
productReviewsModel(sequelize);

// - yo ---------
users(sequelize)
usersType(sequelize)
reviews(sequelize)

// - nel --------
petTypeInit(sequelize);
petInit(sequelize);
vaccineInit(sequelize);
postInit(sequelize);

//saco los modelos de sequelize
const { Product, Order, TypeProduct, UserSellsProduct, ProductReviews, OrderProduct,  Users, UsersType, Reviews } = sequelize.models

//hago la relacion de  mucho a uno

// -------- Init of Tables -----------
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

// ------- Yo ------------------------------
UsersType.hasMany(Users);
Users.belongsTo(UsersType);
// -----------------------------------------

Reviews.hasMany(ProductReviews);
ProductReviews.belongsTo(Reviews);

Users.hasMany(ProductReviews);
ProductReviews.belongsTo(Users);

PetType.hasOne(Pet); // Relationship 1-1: Pet has one pet type, i.e a Pet can be a dog, cat, bird

// -------- Relationships ------------------

//Relationship n-m: A single Pet can have multiple vaccines and vaccines can be applied to more than one pet

// - nel ----------------------------------------------
Pet.belongsToMany(Vaccine, { through: "PetVaccines" });
Vaccine.belongsToMany(Pet, { through: "PetVaccines" });

//hago la relacion de  mucho a mucho
// - yo ----------------------------------------------- 
Users.belongsToMany(Reviews, { through: 'UserReviews'});
Reviews.belongsToMany(Users, { through: 'UserReviews'});

export default sequelize;