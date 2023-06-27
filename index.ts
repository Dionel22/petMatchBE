import server from "./api/app";
import sequelize from "./api/db";

sequelize.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
