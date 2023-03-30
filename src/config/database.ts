import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelize = new Sequelize({
  database: "juicios",
  username: "root",
  password: "1111",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  models: [path.join(__dirname, "../models")],
  logging: false,
});

export default sequelize;
