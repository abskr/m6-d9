const express = require("express");

const authorRouter = require("./services/author");
const categoryRouter = require("./services/category");
const articleRouter = require("./services/article");

const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/authors", authorRouter);
server.use("/categories", categoryRouter);
server.use("/articles", articleRouter);
db.sequelize.sync({
  force: false
}).then((result) => {
  return db.Author.findByPk(1)
}).then(async author => {
  if (!author) {
    const newAuthor = await db.Author.create({
      name: "Andi",
      surname: "Bskr"
    })
  }
}).then(() => {
  server.listen(process.env.PORT || 5001, () => {
    console.log("server is running on port ", process.env.PORT || 5001);
  });
})