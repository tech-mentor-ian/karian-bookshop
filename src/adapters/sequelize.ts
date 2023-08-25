import { Sequelize } from "sequelize-typescript";
import { resolve } from "path";

const sequelize = new Sequelize({
  dialect: "mysql", // Change to 'mysql'
  host: "localhost",
  database: "karian_bookshop",
  username: "your-username",
  password: "your-password",
  models: [resolve(__dirname, "..", "features", "**", "*.model.ts")],
});

export default sequelize;
