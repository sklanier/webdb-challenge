const express = require("express");
const helmet = require("helmet");

const actionRouter = require("../actions/router.js");
const homeRouter = require("../home/home-router.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/action", actionRouter);
server.use("/api/home", homeRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;