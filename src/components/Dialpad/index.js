
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';
import Dialform from '../Dialform';
import Keyboard from '../Keyboard';

const Dialpad = (props) => {
  return (
    <Fragment>
      <Dialform 
        classes={ styles.mt30 } 
        handler={ props.inputHandler }
        value={ props.value }
        disabled={ props.disabled }
        visible={ true }     
      />
      <Keyboard classes={ styles.mt25 } onClick={ props.keyboardHandler } visible={ true }/>
    </Fragment>
  );
}

Dialpad.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  inputHandler: PropTypes.func.isRequired,
  keyboardHandler: PropTypes.func.isRequired
};

export default Dialpad;

