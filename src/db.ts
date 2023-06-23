require("dotenv").config();
import { Sequelize, Model } from "sequelize";
import users from "./models/users";
import usersType from "./models/usersType";
import reviews from "./models/reviews";

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
reviews(sequelize)

const { Users, UsersType, Reviews } = sequelize.models;

UsersType.hasMany(Users
);
Users.belongsTo(UsersType);


Users.belongsToMany(Reviews, { through: 'UserReviews'});
Reviews.belongsToMany(Users, { through: 'UserReviews'});


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};