
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      //defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {    //2
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {       //3
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {       //8
      type: DataTypes.TEXT,
    },
    phone: {      //6
      type: DataTypes.STRING,
      AllowNull: false,
    },
    address: {      //5
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {  //4
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {    //7
      type: DataTypes.STRING,
      allowNull: true,
    },
    verify: {  //11
      type: DataTypes.BOOLEAN,
    },
  },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    }

  );
}