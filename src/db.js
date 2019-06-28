"use strict";
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
/* 
const sequelize = new Sequelize('RoCore', 'postgres', 'roller17', {
  host: '127.0.0.1',
  dialect: 'postgres'
});
*/

// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://postgres:roller17@127.0.0.1/RoCore');

//Option 3
// ... Postgres sequelize
const sequelize = new Sequelize('postgres://postgres:roller17@127.0.0.1/RoCore', {
  dialect: "postgres",
  dialectOptions: { decimalNumbers: true },
  logging: false,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
  define: {
      freezeTableName: true,
      defaultScope: {
          attributes: {
              exclude: ["createdAt", "updatedAt"]
          }
      }
  }
});


module.exports = sequelize;