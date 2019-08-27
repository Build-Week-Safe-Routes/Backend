const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("../routes/auth/auth-router.js");
const accidentRouter = require("../routes/accidents/accidents-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/accident", accidentRouter);

module.exports = server;
