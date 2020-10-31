import React, { Component } from 'react';

import "./calculator.css"

class Calculator extends Component {

    render() {      
        return (
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
        )
    }
}
export default Calculator;
