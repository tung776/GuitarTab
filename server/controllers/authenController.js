const { user } = require("../models");

module.exports = {
  async register(req, res) {
    try {
      console.log("req.body: ", req.body);
      console.log("user: ", user);

      const _user = await user.create(req.body).catch(err =>
        res.send({
          error: err
        })
      );
      res.send(_user.toJSON());
      // res.send(`hello ${req.body.email}`);
    } catch (err) {
      res.status(400).send({
        error: err
      });
    }
    // res.send({
    //   message: `Xin chao ban ${req.body.email}`
    // });
  }
};
