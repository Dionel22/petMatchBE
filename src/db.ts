require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import users from "./models/users";
import usersType from "./models/usersType";

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

users(sequelize)
usersType(sequelize)

const { Users, UsersType } = sequelize.models;

UsersType.hasMany(Users
);

Users.belongsTo(UsersType);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};