const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('category', {
     id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};