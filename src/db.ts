require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import productModel from "./models/Product";
import orderModel from "./models/Order";
import typeProductModel from "./models/TypeProduct";
import userSellsProductModel from "./models/UserSellsProduct";
import productReviewsModel from "./models/ProductReviews";
import orderProductModel from "./models/OrderProducts";
import users from "./models/users";
import usersType from "./models/usersType";
import reviews from "./models/reviews";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE } = process.env;


const sequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`,
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
productModel(sequelize);
orderModel(sequelize);
orderProductModel(sequelize);
typeProductModel(sequelize);
userSellsProductModel(sequelize);
productReviewsModel(sequelize);
users(sequelize)
usersType(sequelize)
reviews(sequelize)


//saco los modelos de sequelize
const { Product, Order, TypeProduct, UserSellsProduct, ProductReviews, OrderProduct,  Users, UsersType, Reviews } = sequelize.models

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
Users.belongsToMany(Reviews, { through: 'UserReviews'});
Reviews.belongsToMany(Users, { through: 'UserReviews'});


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};