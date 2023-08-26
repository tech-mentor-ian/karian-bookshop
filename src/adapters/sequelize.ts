import { Sequelize } from "sequelize-typescript";
import { resolve } from "path";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "karian_bookshop",
  username: "karianmash",
  password: "mash8484",
  models: [resolve(__dirname, "..", "features", "**", "*.model.ts")],
});

export default sequelize;
