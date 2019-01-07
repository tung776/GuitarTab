const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
  res.send("API root");
});

app.post("/register", (req, res) => {
  console.log(req.body.email);
  res.send({
    message: `Xin chao ban ${req.body.email}`
  });
});
// export the server middleware
module.exports = {
  path: "/api",
  handler: app
};
