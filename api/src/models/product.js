

const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
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
    image: {
      type: DataTypes.STRING,
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
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};
