import React, { Component } from 'react';
import axios from 'axios';

import "./calculator.css"

class Calculator extends Component {

    state = {
        firstNumber: "",
        secondNumber: "",
        operator: "",
        result: 0,
        isOperatorChosen: false,
        isCalculated: false,
        calculationList: [],
    }

    componentDidMount() {
        axios.get("/api/all").then(res =>
            this.setState({
                calculationList: res.data
            })
        )
            .catch(err => console.log(err));

    }

    //Handle number clicked
    handleNumberClick(event) {
        // Check if we've already run a calculation, if so we'll just exist.
        if (this.state.isCalculated) {
            return false;
        }

        //set result to string after user clicked the firstNumber
        this.setState({
            result: ""
        })

        //If the operator have been click (this.state.isOperatorChosen = true) then we should be writing the secondNumber
        if (this.state.isOperatorChosen) {
            this.setState({
                secondNumber: event.target.innerText
            })
        } else {
            this.setState({
                firstNumber: event.target.innerText
            })
        }
    }

    handleOperatorClick(event) {
        //Check if a first number has already been selected. Or we've already run a calculation, if so we just exit.
        if (!this.state.firstNumber || this.state.isCalculated) {
            return false;
        }
        this.setState({
            operator: event.target.innerText,
            isOperatorChosen: true,
        })
    }

    handleEqualClick() {
        let result;
        let firstNumbers = parseInt(this.state.firstNumber);
        let secondNumbers = parseInt(this.state.secondNumber);
        if (this.state.operator === "+") {
            result = firstNumbers + secondNumbers
        } else if (this.state.operator === "-") {
            result = firstNumbers - secondNumbers
        } else if (this.state.operator === "x") {
            result = firstNumbers * secondNumbers
        } else if (this.state.operator === ":") {
            result = firstNumbers / secondNumbers
        }
        this.setState({
            isCalculated: true,
            result: result
        });
        // If we already clicked equal, don't do the calculation again
        if (this.state.isCalculated) {
            return false;
        }
    }

    handleClearClick() {
        this.setState({
            firstNumber: "",
            secondNumber: "",
            operator: "",
            result: 0,
            isOperatorChosen: false,
            isCalculated: false,
        })
    }


    render() {
        console.log(this.state.calculationList)

        return (
            <div class="col-lg-6">
                <div class="calculator_body">
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>1</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>2</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>3</button>
                    <button class="button operate" onClick={(value) => this.handleOperatorClick(value)}>+</button>
                    <br />
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>4</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>5</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>6</button>
                    <button class="button operate" onClick={(value) => this.handleOperatorClick(value)}>-</button>
                    <br />
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>7</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>8</button>
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>9</button>
                    <button class="button operate" onClick={(value) => this.handleOperatorClick(value)}>x</button>
                    <br />
                    <button class="button number" onClick={(value) => this.handleNumberClick(value)}>0</button>
                    <button class="button operate" onClick={(value) => this.handleOperatorClick(value)} >:</button>
                    <button class="button operate" onClick={(value) => this.handleClearClick(value)}>C</button>
                    <button class="button operate" onClick={(value) => this.handleEqualClick(value)}>=</button>
                </div>


                <div class="col-lg-6 ">
                    <div class="card display-calculation">
                        <div class="card-body">
                            <p id="first-number">{this.state.firstNumber}</p>
                            <p id="operator">{this.state.operator}</p>
                            <p id="second-number">{this.state.secondNumber}</p>
                            <p>{this.state.result}</p>
                        </div>
                    </div>
                    <div class="display-results">
                        {this.state.calculationList.map((value) => 
                            <p>{value.calculation}</p>
                        )}
                    </div>
                </div>
            </div >
        )
    }
}
export default Calculator;
