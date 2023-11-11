const bodyParser = require("body-parser");
const author = require("../routes/Authors");
const book = require("../routes/Books");
module.exports = (app) => {
  app.use(bodyParser.json()); // indica para o express que terá uma  biblioteca que fará o "meio de campo" entre as requisições e o express
  app.use(author, book);

  app.get("/", (req, res) => res.status(200).send("Olá"));
};
