const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { User } = require("../models");

function jwtSignUser(_user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(_user, config.authen.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register(req, res) {
    try {
      const _user = await User.create(req.body);
      res.send(_user.toJSON());
      // res.send(`hello ${req.body.email}`);
    } catch (err) {
      console.log("đã có lỗi: ", err);
      res.status(400).send({
        error: "Địa chỉ email này đã được đăng ký!"
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      console.log("req.body = ", req.body);
      const _user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!_user) {
        return res.status(403).send({
          error: "Người dùng chưa đăng ký"
        });
      }
      if (!_user.comparePassword(password)) {
        return res.status(403).send({
          error: "sai mật khẩu"
        });
      }
      const userToken = _user.toJSON();
      res.send({
        user: userToken,
        token: jwtSignUser(userToken)
      });
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
  },
  async user(req, res) {
    try {
      const _user = req.user;

      if (!_user) {
        return res.status(403).send({
          error: "Người dùng chưa đăng ký"
        });
      }
      const userJson = _user.toJSON();
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (err) {
      console.log("đã có lỗi: ", err);
      res.status(403).send({
        error: "Thông tin đăng nhập không chính xác!"
      });
    }
  }
};
