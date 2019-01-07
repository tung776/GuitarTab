const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("API root");
});

router.post("/register", (req, res) => {
    console.log(req.body.email);
    res.send({
        message: `Xin chao ban ${req.body.email}`
    });
});

module.exports = router