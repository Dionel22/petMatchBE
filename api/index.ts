import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes/index";

import sequelize from "./db";

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

// Error catching endware.
interface ErrorHTTP {
  status: number | undefined;
  message: string | undefined;
}
server.use(
  (err: ErrorHTTP, req: Request, res: Response, next: NextFunction): void => {
    // eslint-disable-line no-unused-vars
    sequelize.sync();
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  }
);

sequelize.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
