const express = require("express");
const myRouters = require("./Routes/index.js");
const path = require("path");
app.use(express.static(path.resolve(__dirname, "./client/build")));

const app = express();
const PORT = 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//use all different routes
myRouters.routers.forEach((router) => {
  app.use("/", router.router);
});

app.listen(PORT, () => {
  console.log(`Server listening on port #${PORT}`);
});
