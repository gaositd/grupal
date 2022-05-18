const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  }, {timestamps: true,
    createdAt: true,
    updatedAt: false
});
};




  