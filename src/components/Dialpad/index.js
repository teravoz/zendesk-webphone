import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';
import Dialform from '../Dialform';
import Keyboard from '../Keyboard';

class Dialpad extends Component {

  propDefaults = {
    readOnly: false
  }

  state = {
    value: ''
  }

  isValidChar(key) {
    switch(key) {
      case '#':
      case '*':
      case '+':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case 'Enter':
      case 'Backspace':
        return true;
    }
  }

  setNumber(key) {
    const valid = this.isValidChar(key);
    if (valid) {
      let value = '';
      if (key === 'Enter' ){
        if (this.state.value.length > 0) {
          this.props.onEnterPressed();
        }
        return;
      } else if (key === 'Backspace') {
        value = this.state.value.substring(0, this.state.value.length - 1);
      } else {
        value = this.state.value + key;
      }
      this.setState({ value });
      this.props.onValueChanged && this.props.onValueChanged(value, key);
    }
  }

  onTextChanged = (e) => {
    this.setNumber(e.key);
  }

  onKeyPress = (value) => (e) => {
    this.setNumber(value);
  }

  render() {
    const { placeholder, readOnly } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <Dialform
          disabled={ readOnly }
          classes={ styles.mt30 }
          handler={ this.onTextChanged }
          placeholder={ placeholder }
          value={ value }
          visible={ true }
        />
        <Keyboard classes={ styles.mt25 } onClick={ this.onKeyPress } visible={ true }/>
      </Fragment>
    );
  }
}

Dialpad.propTypes = {
  readOnly: PropTypes.bool,
  onValueChanged: PropTypes.func,
  onEnterPressed: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Dialpad;

