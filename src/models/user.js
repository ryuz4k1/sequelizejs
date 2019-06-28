const db        = require('../db')
const Sequelize = require('sequelize');

const User = db.define('users', {
    //attributes
    userId: {
      field: "userId",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    isActive: {
      field: "isActive",
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isDeleted: {
      field: "isDeleted",
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    firstName: {
      field: "firstName",
      type: Sequelize.STRING(255),
      allowNull: false
    },
    lastName: {
      field: "secondName",
      type: Sequelize.STRING(255),
      allowNull:false
    },
    email: {
      field: "email",
      type: Sequelize.STRING(255),
      allowNull: false
    },
    phone: {
      field: "phone",
      type: Sequelize.STRING(16),
      allowNull: false,
      unique: 'compositeIndex'
    },
    password: {
      field: "password",
      type: Sequelize.STRING(64),
      allowNull: false
    },
    image: {
      field: "image",
      type: Sequelize.STRING(255)
  }
  }, { timestamps: false });

module.exports = User; 