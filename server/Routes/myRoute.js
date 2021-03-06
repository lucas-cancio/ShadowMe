const express = require("express");
const myRouteController = require("../Controllers/myRouteController.js");
const myRouter = express.Router();

myRouter.get("/api", myRouteController.myCallback);

module.exports = { myRouter };
