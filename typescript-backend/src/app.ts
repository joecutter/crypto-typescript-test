import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import * as swaggerConfig from "./Docs";
import "reflect-metadata";
import routes from "./routes";

const app = express();

const startApp = async () => {
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

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
};

startApp();

export default app;
