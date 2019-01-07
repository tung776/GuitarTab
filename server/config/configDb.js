module.exports = {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
        dialect: process.env.DB_PASS || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './tabtracker.sqlite'
    }
}