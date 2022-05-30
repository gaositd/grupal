const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

  sequelize.define('ordersHead', {
     id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date:{
        type: DataTypes.DATE(6),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id_user:{
        type: DataTypes.UUID,
        allowNull: false
    },
    currency:{
        type:DataTypes.FLOAT,
        allowNull: false
    },
    total:{
        type:DataTypes.FLOAT,
        allowNull: false
    }    
  },{timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};