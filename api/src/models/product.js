const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    createBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }    
  }, {timestamps: true,
    createdAt: true,
    updatedAt: false
});
};