const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Location, Review, Rating,
    }) {
      Route.belongsTo(User, { foreignKey: 'user_id' });
      Route.belongsTo(Location, { foreignKey: 'location_id' });
      Route.hasMany(Review, { foreignKey: 'route_id' });
      Route.hasMany(Rating, { foreignKey: 'route_id' });
    }
  }
  Route.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    map: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    location_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Locations',
        key: 'id',
      },
    },
    length_km: {
      type: DataTypes.INTEGER,
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
    modelName: 'Route',
    tableName: 'Routes',
  });
  return Route;
};
