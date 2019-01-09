const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll('bcrypt-nodejs')

function hashPassword(user) {
    const SALT_FACTOR = 8;
    if (!user.changed('password')) {
        return;
    }

    return bcrypt.genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING(126),
            unique: true
        },
        password: {
            type: DataTypes.STRING(126)
        }
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    });

    User.prototype.comparePassword = (password) => {
        return bcrypt.compareAsync(password, this.password)
    }
    return URLSearchParams;
};