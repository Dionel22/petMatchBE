import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes/index";

import sequelize from "./db";

import session from "express-session"
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { Users } from "./models/User";

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

//el secret code de la session dura una semana
server.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, 
    },
  })
);
server.use(passport.initialize());
server.use(passport.session());

// se ejecuta una vez, cuando el usuario se autentica y se guarda la información relevante en la sesión
passport.serializeUser((user: any, done: any) => {
  return done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  Users.findByPk(id)
    .then((user: any) => {
      return done(null, user);
    })
    .catch((err: Error) => {
      return done(err, null);
    });
});

server.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

server.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/home",
    session: true,
  }),
  function (req: any, res: any) {
    res.redirect("http://localhost:3000/home");
  }
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
      callbackURL: "/api/auth/google/callback",
    },
    function (accessToken: string, refreshToken: string, profile: any, done: any) {
      console.log(profile);

      Users.findOne({
        where: {
          googleId: profile.id,
        },
      })
        .then(async (user: any) => {
          if (!user) {
            const newUser = await Users.create({
              id: profile.id,
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            });
            
            done(null, newUser);
          } else {
            done(null, user);
          }
        })
        .catch((err: Error) => {
          done(err, null);
        });
    }
  )
);

server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
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

export default server;
