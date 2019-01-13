const express = require("express");
const router = express.Router();
const authenController = require("../controllers/authenController");
const authenPolicy = require("../policies/authenPolicy");
const songController = require("../controllers/songController");
const songPolicy = require("../policies/songPolicy");
const isAuthenticated = require("../policies/isAuthenticated");

router.post("/register", authenPolicy.register, authenController.register);
router.post("/login", authenPolicy.login, authenController.login);
router.get("/user", isAuthenticated, authenController.user);

router.get("/songs", isAuthenticated, songController.songs);
router.get("/song/:id", isAuthenticated, songController.song);
router.put("/song/:id/edit", isAuthenticated, songController.editSong);
router.post("/createSong", songPolicy.createSong, songController.createSong);

module.exports = router;
