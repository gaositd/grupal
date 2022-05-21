const { Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user_product',{
    id:{
      type:DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    id_product: {
      type:DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull:false,
    },
    type:{
      type_dataType:DataTypes.STRING,
      allowNull:false,
      comments:"type wishlist or sell shopping cart",
    }
  },
  );
}