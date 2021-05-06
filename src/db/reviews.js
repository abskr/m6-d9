module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      required: true,
    }
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Article)
    Review.hasOne(models.Author)
  }
  return Review
}