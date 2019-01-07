const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");

router.post("/register", authenController.register);

module.exports = router;
