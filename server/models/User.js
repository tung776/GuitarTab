module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        email: {
            type: DataTypes.STRING(126),
            unique: true
        },
        password: {
            type: DataTypes.STRING(126)
        }
    });
};