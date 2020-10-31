const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

// Creates a "Calculations" model that matches up with DB
const Calculation = sequelize.define("calculations", {
  first_number: {
    type: Sequelize.INTEGER,
    required: true
  },
  second_number: {
    type: Sequelize.INTEGER,
    required: true
  },
  operator:  {
    type: Sequelize.STRING,
    required: true
  },
  result:  {
    type: Sequelize.INTEGER,
    required: true
  }

});

// Syncs with DBc
Calculation.sync();

module.exports = Calculation;