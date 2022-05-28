const { Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('userProduct',{    
    type:{
      type:DataTypes.STRING,
      defaultValue:"wishlist",
      comments:"type wishlist or sell shopping cart",
    }
  },
  );
}