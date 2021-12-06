import "reflect-metadata";
import { createConnection } from "typeorm";
import { Asset } from "../entity/Asset";

export const dbConnection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5439,
  username: "root",
  password: "password",
  database: "test-db",
  entities: [Asset],
  synchronize: true,
  logging: false,
});
