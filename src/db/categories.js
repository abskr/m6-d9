module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
      },
    }, {
      timestamps: false
    }
  );

  return Category
}