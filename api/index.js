const express = require("express");
const routes = require("./routes/");

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;
// Comandos básicos das migrations
// Para zerar o bc: npx sequelize-cli db:migrate:undo:all
// Para subir as migrations: npx sequelize-cli db:migrate
// Para subir as seeds: npx sequelize-cli db:seed:all
