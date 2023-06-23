require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import productModel from "./models/Product";
import orderModel from "./models/Order";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

// son funcion que pasa la instancia de sequelize
productModel(sequelize) 
orderModel(sequelize)

//saco los modelos de sequelize
const { Product, Order } = sequelize.models

//hago la relacion de mucho a mucho
Product.belongsToMany(Order, {through: "Product_Order", timestamps: false});
Order.belongsToMany(Product, {through: "Product_Order", timestamps: false});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
