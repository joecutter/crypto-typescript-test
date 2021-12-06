import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import * as swaggerConfig from "./Docs";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import "reflect-metadata";
import routes from "./routes";

const app = express();

dotenv.config();

const PORT = `${process.env.PORT}`;

const startApp = async () => {
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // await mongodb.dbConnection();

  /*ENABLE CORS*/
  app.use((req, res, next) => {
    // set the CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    // set the CORS headers
    res.header(
      "Access-Control-Allow-Headers",
      "origin, X-Requested-With,Content-Type,Accept, Authorization"
    );
    // set the CORS method headers
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
      return res.status(200).json({});
    }
    next();
  });

  /*ROUTES*/
  app.use(routes);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
      message: error.message,
    });
  });

  //db
  createConnection()
    .then(async (connection) => {
      //START THE SERVER
      app.listen(PORT, () => {
        console.log("Database is up...!!");
        console.log(`ENVIRONMENT ${process.env.NODE_ENV}`);
        console.log(
          `⚡️[server]: Server is running at http://${process.env.HOST}:${PORT}`
        );
      });
    })
    .catch((error) => console.log(error));
};

startApp();

module.exports = app;
