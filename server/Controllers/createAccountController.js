exports.testCallback = (req, res) => {
  res.send("Wow this works");
};

exports.postCallback = (req, res) => {
  console.log(req.body);
  res.send("I received a POST request");
};
