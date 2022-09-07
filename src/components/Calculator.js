import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  render() {
    const { obj } = this.state;
    const handleBtnClick = (buttonName) => {
      const newObj = calculate(obj, buttonName);
      this.setState({ obj: newObj });
    };

    return (
      <div className="calculatorContainer">
        <div className="calculatorResult">{obj.next || obj.total || 0}</div>
        <div className="calculatorButtonsContainer">
          <div className="numbersGroupContainer">
            <div className="numbersGroup">
              <Button btnClass="button" btnText="AC" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="+/-" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="%" btnClick={handleBtnClick} />
            </div>
            <div className="numbersGroup">
              <Button btnClass="button" btnText="7" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="8" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="9" btnClick={handleBtnClick} />
            </div>
            <div className="numbersGroup">
              <Button btnClass="button" btnText="4" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="5" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="6" btnClick={handleBtnClick} />
            </div>
            <div className="numbersGroup">
              <Button btnClass="button" btnText="1" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="2" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="3" btnClick={handleBtnClick} />
            </div>
            <div className="numbersGroup">
              <Button btnClass="button" btnText="0" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="." btnClick={handleBtnClick} />
            </div>
          </div>
          <div className="operatorContainer">
            <div className="operatorsGroup">
              <Button btnClass="button" btnText="÷" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="x" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="-" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="+" btnClick={handleBtnClick} />
              <Button btnClass="button" btnText="=" btnClick={handleBtnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
