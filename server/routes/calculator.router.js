const Calculation = require("../models");


module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    Calculation.find()
      .then(function (results) {
        console.log(results)
        res.json(results);
      })
      .catch(err => res.status(422).json(err))
  });

};