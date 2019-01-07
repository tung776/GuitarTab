const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");

router.get("/", (req, res, next) => {
  res.send("API root");
});

router.post("/register", authenController.register);

module.exports = router;
