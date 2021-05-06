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
        allowNull: false
      },
      subHead: {
        type: DataTypes.STRING,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
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

  return Article
}