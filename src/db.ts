require("dotenv").config();
import { Sequelize } from "sequelize";
import { Pet, PetInit } from "./models/Pets";
import { Vaccine, VaccineInit } from "./models/Vaccine";
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

export default sequelize;
