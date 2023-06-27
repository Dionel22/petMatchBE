import server from "./src/app";
import sequelize from "./src/db";

sequelize.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
