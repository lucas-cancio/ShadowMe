const express = require("express");

//import routes
const myRouter = require("./myRoute.js");
const createAccountRoute = require("./createAccountRoute.js");

//amalgamate routes
let routers = [];
routers.push({ router: myRouter.myRouter });
routers.push({ router: createAccountRoute.router });

module.exports = { routers };
