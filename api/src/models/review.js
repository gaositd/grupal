const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("review", {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    ranking: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    }
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};