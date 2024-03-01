const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dark-blue-f8", (req, res) => {
  return res.redirect(307,"https://zaksrealm.net");
});

app.listen(port, () => {
  console.log(`Rotation app listening on port ${port}`);
});
