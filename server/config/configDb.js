module.exports = {
  database: process.env.DB_NAME || "tabtracker",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "tung1221982",
  options: {
    dialect: process.env.DB_PASS || "mysql",
    host: process.env.HOST || "localhost"
    // storage: './tabtracker.sqlite'
  }
};
