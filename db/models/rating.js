const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Route }) {
      Rating.belongsTo(User, { foreignKey: 'user_id' });
      Rating.belongsTo(Route, { foreignKey: 'route_id' });
    }
  }
  Rating.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    value: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    route_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Routes',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Rating',
    tableName: 'Ratings',
  });
  return Rating;
};
