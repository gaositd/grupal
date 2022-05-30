const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    email: {    //2
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {       //3
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {timestamps: false});
};