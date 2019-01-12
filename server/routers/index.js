const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");
const authenPolicy = require("../policies/authenPolicy");
const songController = require("../controllers/songController");
const songPolicy = require("../policies/songPolicy");

router.post("/register", authenPolicy.register, authenController.register);
router.post("/login", authenPolicy.login, authenController.login);

router.get("/songs", songController.songs);
router.get("/song/:id", songController.song);
router.put("/song/:id/edit", songController.editSong);
router.post("/createSong", songPolicy.createSong, songController.createSong);

module.exports = router;