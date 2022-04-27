const express = require("express");
const loginController = require("../Controllers/login.js");
const router = express.Router();

router.post("/login", loginController.postCallback);

module.exports = { router };
