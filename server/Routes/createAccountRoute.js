const express = require("express");
const routeController = require("../Controllers/createAccountController.js");
const router = express.Router();

router.get("/createAccount", routeController.getCallback);
router.post("/createAccount", routeController.postCallback);

module.exports = { router };
