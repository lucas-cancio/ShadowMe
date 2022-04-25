const express = require("express");
const myRouters = require("./Routes/index.js");

const app = express();
const PORT = 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

myRouters.routers.forEach((router) => {
  app.use("/", router.router);
});

app.listen(PORT, () => {
  console.log(`Server listening on port #${PORT}`);
});
