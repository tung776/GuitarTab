const fs = require("fs");
const path = require("path");
const configDb = require("../config/configDb");
const Sequelize = require("sequelize");

const db = {};
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
const sequelize = new Sequelize(
  configDb.database,
  configDb.user,
  configDb.password,
  configDb.options
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

fs.readdirSync(__dirname)
  .filter(file => {
    file !== "index.js";
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
