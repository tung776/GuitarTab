const Joi = require("joi");

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
        };

        const {
            error,
            value
        } = Joi.validate(req.body, schema);

        if (error) {
            switch (error.details[0].context.key) {
                case "email":
                    res.status(400).send({
                        error: "Bạn cần cung cấp địa chỉ email chính xác"
                    });
                    break;
                case "password":
                    res.status(400).send({
                        error: "1. Mật khẩu không chứa các ký tự đặc biệt <br> 2. Mật khẩu cần có ít nhất 8 ký tự và không quá 32 ký tự <br>"
                    });
                    break;
                default:
                    res.status(400).send({
                        error: error
                    });
            }
        } else {
            next();
        }
    },


    login(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
        };

        const {
            error,
            value
        } = Joi.validate(req.body, schema);

        if (error) {
            switch (error.details[0].context.key) {
                case "email":
                    res.status(400).send({
                        error: "Bạn cần cung cấp địa chỉ email chính xác"
                    });
                    break;
                case "password":
                    res.status(400).send({
                        error: "1. Mật khẩu không chứa các ký tự đặc biệt <br> 2. Mật khẩu cần có ít nhất 8 ký tự và không quá 32 ký tự <br>"
                    });
                    break;
                default:
                    res.status(400).send({
                        error: error
                    });
            }
        } else {
            next();
        }
    }

};