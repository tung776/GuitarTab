module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        email: {
            type: DataTypes.STRING(126),
            unique: true
        },
        password: {
            type: DataTypes.STRING(126)
        }
    });
};