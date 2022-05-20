const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    usrname: {    //2
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {       //3
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {  //4
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {      //5
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {      //6
      type: DataTypes.STRING,
      AllowNull: false,
    },
    country: {    //7
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {       //8
      type: DataTypes.TEXT,
    },
    password: {   //9
      type: DataTypes.STRING,
      allowNull: false,
    },
    doublecheck: {//10
      type: DataTypes.STRING,
 
    },
    verifyusr: {  //11
      type: DataTypes.BOOLEAN,

    },
    adminusr: {   //12
      type: DataTypes.BOOLEAN,

    },
    
  }, {timestamps: true,
    createdAt: true ,
    updatedAt: false
});
};
