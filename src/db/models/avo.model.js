const { Sequelize, Model, DataTypes } = require('sequelize')

const AVO_TABLE = 'avos'

const avoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  image: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Avo extends Model {
  static config (sequelize) {
    return {
      sequelize,
      modelName: 'Avo',
      tableName: AVO_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  AVO_TABLE,
  avoSchema,
  Avo
}
