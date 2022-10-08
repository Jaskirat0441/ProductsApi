const express = require("express");
const cors = require("cors");
const app = express();

const apiData = require("./data.json");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("i m live");
});

// main api data
app.get("/products", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("im live again ");
});
