const { DataTypes, Sequelize, } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("review", {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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