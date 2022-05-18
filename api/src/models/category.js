const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('category', {
     id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
     image: {
      type: DataTypes.TEXT,
    },
  },{
    timestamps:true
  });
};
