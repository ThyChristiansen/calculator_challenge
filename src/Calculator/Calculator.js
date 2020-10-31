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
    render() {
        return (
            <div class="col-lg-6">
                <div class="calculator_body">
                    <button class="button number">1</button>
                    <button class="button number">2</button>
                    <button class="button number">3</button>
                    <button class="button operate">+</button>
                    <br />
                    <button class="button number">4</button>
                    <button class="button number" >5</button>
                    <button class="button number">6</button>
                    <button class="button number">-</button>
                    <br />
                    <button class="button number">7</button>
                    <button class="button number">8</button>
                    <button class="button number">9</button>
                    <button class="button number">x</button>
                    <br />
                    <button class="button number">0</button>
                    <button class="button number">:</button>
                    <button class="button number">C</button>
                    <button class="button number">=</button>
                </div>


                <div class="col-lg-6 ">
                    <div class="card display-calculation">
                        <div class="card-body">
                            <p id="first-number">1</p>
                            <p id="operator">+</p>
                            <p id="second-number">1</p>
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
