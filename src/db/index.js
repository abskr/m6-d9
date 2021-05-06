const { Sequelize, DataTypes } = require("sequelize");
const Author = require('./authors')
const Category = require('./categories')
const Article = require('./articles')
const Review = require('./reviews')

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
  Author: Author(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Author: Author(sequelize, DataTypes),
  Author: Author(sequelize, DataTypes),
  sequelize: sequelize
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;