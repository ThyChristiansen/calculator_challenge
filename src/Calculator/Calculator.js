import React, { Component } from 'react';

import "./calculator.css"

class Calculator extends Component {

    state = {
        firstNumber: "",
        secondNumber: "",
        operator: "",
        result: 0,
        isOperatorChosen: false,
        isCalculated: false,
    }

    handleNumberClick(event){
        this.setState({
            firstNumber: event.target.innerText
        })
        // console.log(event.target.innerText);
    }

    handleOperatorClick(event){
        this.setState({
            operator: event.target.innerText
        })
        console.log(event.target.innerText);
    }
    render() {
        return (
            <div class="col-lg-6">
                <div class="calculator_body">
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>1</button>
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>2</button>
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>3</button>
                    <button class="button operate" onClick={(value)=>this.handleOperatorClick(value)}>+</button>
                    <br />
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>4</button>
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>5</button>
                    <button class="button number"onClick={(value)=>this.handleNumberClick(value)}>6</button>
                    <button class="button number" onClick={(value)=>this.handleOperatorClick(value)}>-</button>
                    <br />
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>7</button>
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>8</button>
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>9</button>
                    <button class="button number" onClick={(value)=>this.handleOperatorClick(value)}>x</button>
                    <br />
                    <button class="button number" onClick={(value)=>this.handleNumberClick(value)}>0</button>
                    <button class="button number" onClick={(value)=>this.handleOperatorClick(value)} >:</button>
                    <button class="button number" onClick={(value)=>this.handleOperatorClick(value)}>C</button>
                    <button class="button number" onClick={(value)=>this.handleOperatorClick(value)}>=</button>
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
                        <ul>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                            <li>1+1= 2</li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
export default Calculator;
