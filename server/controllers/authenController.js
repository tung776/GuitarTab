const jwt = require('jsonwebtoken');
const config = require('../config/configDb')
const {
    user
} = require("../models");

module.exports = {
    async register(req, res) {
        try {
            const _user = await user.create(req.body);
            res.send(_user.toJSON());
            // res.send(`hello ${req.body.email}`);
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(400).send({
                error: "Địa chỉ email này đã được đăng ký!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    },
    async login(req, res) {
        try {
            const {
                email,
                password
            } = req.body
            const _user = await user.findOne({
                where: {
                    email: email
                }
            });

            if (!_user) {
                return res.status(403).send({
                    error: "Người dùng chưa đăng ký"
                })
            }
            if (_user.password !== password) {
                return res.status(403).send({
                    error: "sai mật khẩu"
                })
            }
            res.send(_user.toJSON());
            // res.send(`hello ${req.body.email}`);
        } catch (err) {
            console.log("đã có lỗi: ", err);
            res.status(403).send({
                error: "Thông tin đăng nhập không chính xác!"
            });
        }
        // res.send({
        //   message: `Xin chao ban ${req.body.email}`
        // });
    }
};