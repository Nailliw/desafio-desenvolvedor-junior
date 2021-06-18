const express = require("express");
const config = require("config");
const routes = require("./routes/");

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;
