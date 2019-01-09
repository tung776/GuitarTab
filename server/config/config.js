module.exports = {
    database: "tabtracker",
    user: "root",
    password: "tung1221982",
    options: {
        dialect: "mysql",
        host: "localhost"
            // storage: './tabtracker.sqlite'
    },
    authen: {
        jwtSecret: process.env.JWT_SECRET || "secret"
    }
};