require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import productModel from "./models/Product";
import orderModel from "./models/Order";
import typeProductModel from "./models/TypeProduct";
import userSellsProductModel from "./models/UserSellsProduct";
import productReviewsModel from "./models/ProductReviews";
import orderProductModel from "./models/OrderProducts";
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE } = process.env;

const sequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`,
  {
    dialect: "postgres",
    //logging: false,
    //native: false,
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


//saco los modelos de sequelize
const { Product, Order, TypeProduct, UserSellsProduct, ProductReviews, OrderProduct } = sequelize.models

//hago la relacion de  mucho a uno 
TypeProduct.hasMany(Product);
Product.belongsTo(TypeProduct);

Product.hasMany(ProductReviews);
ProductReviews.belongsTo(Product);

Product.hasMany(UserSellsProduct);
UserSellsProduct.belongsTo(Product);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
