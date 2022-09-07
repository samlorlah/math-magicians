import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { btnClass, btnText, btnClick } = this.props;
    return (
      <button className={btnClass} type="button" onClick={() => btnClick(btnText)}>
        {btnText}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
