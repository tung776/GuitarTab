const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");
const authenPolicy = require("../policies/authenPolicy");

router.post("/register", authenPolicy.register, authenController.register);
router.post("/login", authenPolicy.login, authenController.login);

module.exports = router;