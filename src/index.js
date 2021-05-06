const express = require("express");

const authorRouter = require("./services/author");
// const cartsRouter = require("./services/cart");
// const categoriesRouter = require("./services/categories");

const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
 server.use("/authors", authorRouter);
// server.use("/cart", cartsRouter);
// server.use("/categories", categoriesRouter);
db.sequelize.sync({
  force: false
}).then((result) => {
  return db.Author.findByPk(1)

}).then(async author => {
  if (!author) {
    const newAuthor = await db.Author.create({
      name: "Andi",
      surame: "Bskr"
    })
  }
}).then(() => {
  server.listen(process.env.PORT || 5001, () => {
    console.log("server is running on port ", process.env.PORT || 5001);
  });
})