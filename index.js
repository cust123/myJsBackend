require("dotenv").config();
const express = require("express");
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World and welcome to JavaScript Backend!");
});

app.get("/twitter", (req, res) => {
  res.send("muhammadshafiq");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login at Chai aur Code </h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>https://www.youtube.com/@chaiaurcode</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`welcome to JavaScript Backend!`);
});
