const express = require("express");

//import routers
const myRouter = require("./myRoute.js");
const createAccountRoute = require("./createAccountRoute.js");
const loginRouter = require("./login.js");

//amalgamate routes
let routers = [];
routers.push({ router: myRouter.myRouter });
routers.push({ router: createAccountRoute.router });
routers.push({ router: loginRouter.router });

module.exports = { routers };
