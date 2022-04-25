const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api", (req, res) => {
  res.json({ message: "HELLOW THERE GOOD SIR" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port #${PORT}`);
});
