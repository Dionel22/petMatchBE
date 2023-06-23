import server from "./src/app";
const { conn } = require("./src/db");

conn.sync().then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
