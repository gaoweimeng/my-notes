import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Catalogue = sequelize.define('Catalogue', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  createTime: {
    type: DataTypes.DATE
  },
  parentId: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isDelete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

const models = {
  Catalogue
}

export default models