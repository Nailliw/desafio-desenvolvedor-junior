const express = require("express");
const config = require("config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/teste", (req, res) => {
  res.status(200).send({ message: "nice to meet you" });
});

app.listen(port, () => console.log("Server is running"));

module.exports = app;
