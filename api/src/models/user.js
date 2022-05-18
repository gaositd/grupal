const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    usrname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birdthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doublecheck: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verifyusr: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    
  }, {timestamps: true,
    createdAt: true ,
    updatedAt: false
});
};
