import * as dotenv from "dotenv";
dotenv.config();
import app from "./app";

const PORT = `${process.env.PORT}`;

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`ENVIRONMENT ${process.env.NODE_ENV}`);
    console.log(
      `⚡️[server]: Server is running at http://${process.env.HOST}:${PORT}`
    );
  });
};

startServer();
