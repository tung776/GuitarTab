const { user } = require("../models");

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
  }
};
