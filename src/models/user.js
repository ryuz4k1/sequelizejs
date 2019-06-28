const db        = require('../db')
const Sequelize = require('sequelize');

const User = db.define('users', {
    //attributes
    user_id: {
      field: "user_id",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    is_active: {
      field: "is_active",
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_deleted: {
      field: "is_deleted",
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    first_name: {
      field: "first_name",
      type: Sequelize.STRING(255),
      allowNull: false
    },
    last_name: {
      field: "last_name",
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
  },
  createOn: {
    field: "create_on",
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
}
  }, { timestamps: false });

module.exports = User; 