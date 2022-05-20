const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('orderspos', {
    idOrdersHead: {
      type: DataTypes.UUID,
      allowNull: false
    },
    position:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    idProduct:{
        type: DataTypes.UUID,
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    cuantity:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};