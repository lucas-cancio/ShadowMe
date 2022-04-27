const createAccountService = require("../Services/createAccount.js");

const getCallback = async (req, res) => {
  res.send("Hellow there");
};

const postCallback = async (req, res) => {
  let result = await createAccountService(req.body);
  res.send(result);
};

module.exports = { getCallback, postCallback };
