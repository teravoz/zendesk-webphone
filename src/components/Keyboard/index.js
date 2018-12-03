import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';
import Digit from '../Digit';


const Keyboard = (props) => {
  return (
    <div className={ classnames(styles.keyboard, props.classes, { [styles.keyboard__invisible]: !props.visible }) }>
      <div className={ styles.keyboard__block }>
        <Digit digit="1" letters="" />
        <Digit digit="2" letters="ABC" />
        <Digit digit="3" letters="DEF" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit digit="4" letters="GHI" />
        <Digit digit="5" letters="JKL" />
        <Digit digit="6" letters="MNO" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit digit="7" letters="PQRS" />
        <Digit digit="8" letters="TUV" />
        <Digit digit="9" letters="WXYZ" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit digit="*" letters="" />
        <Digit digit="0" letters="+" />
        <Digit digit="#" letters="" />
      </div>
  </div>
  );
}

Keyboard.propTypes = {
  setAppHeight: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  height: PropTypes.number
};

export default Keyboard;

