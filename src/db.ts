require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import productModel from "./models/Product";
import orderModel from "./models/Order";
import typeProductModel from "./models/TypeProduct";
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
typeProductModel(sequelize);

//saco los modelos de sequelize
const { Product, Order, TypeProduct } = sequelize.models

//hago la relacion de  mucho a uno 
TypeProduct.hasMany(Product);
Product.belongsTo(TypeProduct);

//hago la relacion de mucho a mucho
Product.belongsToMany(Order, {through: "Product_Order", timestamps: false});
Order.belongsToMany(Product, {through: "Product_Order", timestamps: false});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
