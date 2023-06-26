require("dotenv").config();
import { Sequelize } from "sequelize";
import petInit, { Pet } from "./models/Pets";
import { Vaccine, vaccineInit } from "./models/Vaccine";
import petTypeInit, { PetType } from "./models/PetType";
import { Post, postInit } from "./models/Post";

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