const fs = require("fs");
const path = require("path");
const configDb = require("../config/config");
const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize(
    configDb.database,
    configDb.user,
    configDb.password, {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });
fs.readdirSync(__dirname).forEach(file => {
    if (file !== "index.js") {
        const model = sequelize.import(path.join(__dirname, file));

        const name = file.replace(".js", "");
        db[model.name] = model;
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;