const Calculation = require("../models/calculator");


module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    Calculation.findAll({}).then(function(results) {
      res.json(results);
    });
  });

};