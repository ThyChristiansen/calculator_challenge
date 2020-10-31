const Calculation = require("../models/calculator");


module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    Calculation.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/calculation", function (req, res) {
    console.log("Calculation Data:",req.body);
    const {firstNumber, secondNumber, operator,result} = req.body
    Calculation.create(
      {first_number: firstNumber,
        second_number: secondNumber,
        operator: operator,
        result: result
      }
    ).then(function (results) {
      res.json(results);
    });
  });

};