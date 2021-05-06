module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      headLine: {
        type: DataTypes.STRING,
        required: true,
      },
      subHead: {
        type: DataTypes.STRING,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
      img: {
        type: DataTypes.STRING,
        required: true,
      },
      cover: {
        type: DataTypes.STRING,
        required: true,
      },
    }
  );
  Article.associate = (models) => {
    Article.belongsToMany(models.Author)
    Article.hasOne(models.Category)
    Article.hasMany(models.Review)
  }
  return Article
}