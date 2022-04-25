const express = require("express");

//import routes
const myRoute = require("./myRoute.js");

//amalgamate routes
let routes = [];
routes.push({ name: "myRoute", route: myRoute });

module.exports = routes;
