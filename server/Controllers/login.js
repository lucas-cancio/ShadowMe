const loginAuthService = require("../Services/loginAuth.js");

const postCallback = async (req, res) => {
  let result = await loginAuthService(req.body);
  res.send(result);
};

module.exports = { postCallback };
