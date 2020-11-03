//Connecting to Mysql

const MYSQLPASSWORD = process.env.MYSQLPASSWORD;

// Dependencies
const Sequelize = require("sequelize");

let sequelize;
if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
   sequelize = new Sequelize("calculator_sequelize", "root", MYSQLPASSWORD, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}


// Exports the connection for other files to use
module.exports = sequelize;
