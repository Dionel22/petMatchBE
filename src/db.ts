require("dotenv").config();
import { Sequelize, Model } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/petmatch`,
  {
    logging: false,
    native: false,
  }
);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
