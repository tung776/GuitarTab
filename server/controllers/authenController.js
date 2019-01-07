module.exports = {
  register(req, res) {
    res.send({
      message: `Xin chao ban ${req.body.email}`
    });
  }
};
