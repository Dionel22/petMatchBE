import server from "./api/app";
import sequelize from "./api/db";
require("dotenv").config();
const { PORT } = process.env;

const appPort = PORT || 8080;

sequelize.sync().then(() => {
  server.listen(appPort, () => {
    console.log("%s listening at 3001");
  });
});
