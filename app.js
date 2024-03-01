const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const defaultHtml = (res) => {
  return res.sendFile(path.join(__dirname, "/html/index.html"));
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dark-blue-f8", (req, res) => {
    return defaultHtml(res);
  return res.redirect(307, "https://zaksrealm.net");
});

app.get("/.well-known/pki-validation/82E63114AA4D5625F934CE7D03311899.txt", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "82E63114AA4D5625F934CE7D03311899.txt")
  );
});

app.listen(port, () => {
  console.log(`Rotation app listening on port ${port}`);
});
