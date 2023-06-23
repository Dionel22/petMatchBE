require("dotenv").config();
import { Sequelize } from "sequelize";
import { Pet, PetInit } from "./models/Pets";
import { Vaccine, VaccineInit } from "./models/Vaccine";
import { PetType, PetTypeInit } from "./models/PetType";
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

// -------- Init of Tables -----------

PetType.init(PetTypeInit, {
  sequelize,
  paranoid: true,
  updatedAt: false,
});

Pet.init(PetInit, {
  sequelize,
  paranoid: true,
  updatedAt: false,
});

Vaccine.init(VaccineInit, {
  sequelize,
  paranoid: true,
  updatedAt: false,
});

// -------- Relationships ----------

// Relationship 1-1: Pet has one pet type, i.e a Pet can be a dog, cat, bird
PetType.hasOne(Pet);

//Relationship n-m: A single Pet can have multiple vaccines and vaccines can be applied to more than one pet
Pet.belongsToMany(Vaccine, { through: "PetVaccines" });
Vaccine.belongsToMany(Pet, { through: "PetVaccines" });

export default sequelize;
