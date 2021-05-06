module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("author", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    surame: {
      type: DataTypes.STRING,
      required: true,
    }
  });

  Author.associate = (models) => {
    Author.belongsToMany(models.Article)
    Author.belongsTo(models.Review)
  }
  return Author
}