const { Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user_product',{
    type:{
      type:DataTypes.STRING,
      defaultValue:"wishlist",
      comments:"type wishlist or sell shopping cart",
    }
  },
  );
}