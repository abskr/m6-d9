const { Sequelize, DataTypes } = require("sequelize");
const User = require('./users')
// const Category = require('./categories')
// const Product = require('./products')
// const Cart = require('./carts')
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    dialectOptions:{
      ssl:{
        require:true, 
        rejectUnauthorized:false
      }
    }
  }
);

const models = {
  
}





sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;