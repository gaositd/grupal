
const { Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user_login',{
    id:{
      type:DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false,
    }
  });
}