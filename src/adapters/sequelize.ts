import { Sequelize } from "sequelize-typescript";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  models: [resolve(__dirname, "..", "features", "**", "*.model.ts")], // automatically import all models from the models folder
  logging: false,
});

export default sequelize;
