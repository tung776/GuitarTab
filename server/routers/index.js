const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");
const authenPolicy = require("../policies/authenPolicy");

router.post("/register", authenPolicy.register, authenController.register);

module.exports = router;
