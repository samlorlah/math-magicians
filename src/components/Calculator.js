/* eslint jsx-quotes: ["error", "prefer-single"] */
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='calculatorContainer'>
        <div className='calculatorResult'>0</div>
        <div className='calculatorButtonsContainer'>
          <div className='numbersGroupContainer'>
            <div className='numbersGroup'>
              <button className='button' type='button'>
                AC
              </button>
              <button className='button' type='button'>
                +/-
              </button>
              <button className='button' type='button'>
                %
              </button>
            </div>
            <div className='numbersGroup'>
              <button className='button' type='button'>
                7
              </button>
              <button className='button' type='button'>
                8
              </button>
              <button className='button' type='button'>
                9
              </button>
            </div>
            <div className='numbersGroup'>
              <button className='button' type='button'>
                4
              </button>
              <button className='button' type='button'>
                5
              </button>
              <button className='button' type='button'>
                6
              </button>
            </div>
            <div className='numbersGroup'>
              <button className='button' type='button'>
                1
              </button>
              <button className='button' type='button'>
                2
              </button>
              <button className='button' type='button'>
                3
              </button>
            </div>
            <div className='numbersGroup'>
              <button className='button' type='button'>
                0
              </button>
              <button className='button' type='button'>
                .
              </button>
            </div>
          </div>
          <div className='operatorContainer'>
            <div className='operatorsGroup'>
              <button className='button' type='button'>
                ÷
              </button>
              <button className='button' type='button'>
                x
              </button>
              <button className='button' type='button'>
                -
              </button>
              <button className='button' type='button'>
                +
              </button>
              <button className='button' type='button'>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
