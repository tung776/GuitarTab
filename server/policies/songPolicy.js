const Joi = require("joi");

module.exports = {
  createSong(req, res, next) {
    // const schema = {
    //     title: Joi.string(),
    //     artist: Joi.string(),
    //     genre: Joi.string(),
    //     album: Joi.string(),
    //     albumImageUrl: Joi.string(),
    //     slug: Joi.string(),
    //     youtubeUrl: Joi.string(),
    //     lyrics: Joi.string(),
    //     tab: Joi.string()
    // };

    // const {
    //     error,
    //     value
    // } = Joi.validate(req.body, schema);

    const error = false;
    if (error) {
      switch (error.details[0].context.key) {
        case "title":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ title chính xác"
          });
          break;
        case "artist":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ artist chính xác"
          });
          break;
        case "genre":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ genre chính xác"
          });
          break;
        case "album":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ album chính xác"
          });
          break;
        case "albumImageUrl":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ albumImageUrl chính xác"
          });
          break;
        case "slug":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ slug chính xác"
          });
          break;
        case "lyrics":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ lyrics chính xác"
          });
          break;
        case "tab":
          res.status(400).send({
            error: "Bạn cần cung cấp địa chỉ tab chính xác"
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
