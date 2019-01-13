const express = require("express");
//plugin cors cho phép ứng dụng chấp nhận POST PUT PACHT GET DELETE
const cors = require("cors");
const bodyParser = require("body-parser");
//console logger cho cả nodejs và trình duyệt
const consola = require("consola");
// const morgan = require("morgan");
const {
    Nuxt,
    Builder
} = require("nuxt");
const {
    sequelize
} = require("./models");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
/*
  app.get('/status', (req, res) => {
    console.log("go status");
    res.send({message: "hello"})
  })
*/
app.use(cors());
app.use(bodyParser.json());
// app.use(morgan("combined"));
require('./config/passport')


app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

const router = require("./routers");
app.use("/api", router);
async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

sequelize.sync().then(() => {
    start();
});