import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';
import Digit from '../Digit';


const Keyboard = (props) => {
  return (
    <div className={ classnames(styles.keyboard, props.classes, { [styles.keyboard__invisible]: !props.visible }) }>
      <div className={ styles.keyboard__block }>
        <Digit onClick={ props.onClick } digit="1" letters="" />
        <Digit onClick={ props.onClick } digit="2" letters="ABC" />
        <Digit onClick={ props.onClick } digit="3" letters="DEF" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit onClick={ props.onClick } digit="4" letters="GHI" />
        <Digit onClick={ props.onClick } digit="5" letters="JKL" />
        <Digit onClick={ props.onClick } digit="6" letters="MNO" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit onClick={ props.onClick } digit="7" letters="PQRS" />
        <Digit onClick={ props.onClick } digit="8" letters="TUV" />
        <Digit onClick={ props.onClick } digit="9" letters="WXYZ" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit onClick={ props.onClick } digit="*" letters="" />
        <Digit onClick={ props.onClick } digit="0" letters="+" />
        <Digit onClick={ props.onClick } digit="#" letters="" />
      </div>
  </div>
  );
}

Keyboard.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  height: PropTypes.number
};

export default Keyboard;

