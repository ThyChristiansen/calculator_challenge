const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

// Creates a "Calculations" model that matches up with DB
const Calculation = sequelize.define("calculations", {
  calculation: Sequelize.STRING,
});

// Syncs with DB
Calculation.sync();

module.exports = Calculation;