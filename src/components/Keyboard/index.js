import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';
import Digit from '../Digit';


const Keyboard = (props) => {
  return (
    <div className={ classnames(styles.keyboard, props.classes, { [styles.keyboard__invisible]: !props.visible }) }>
      <div className={ styles.keyboard__block }>
        <Digit key={ 1 } onClick={ props.onClick } digit="1" letters="" />
        <Digit key={ 2 } onClick={ props.onClick } digit="2" letters="ABC" />
        <Digit key={ 3 } onClick={ props.onClick } digit="3" letters="DEF" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit key={ 4 } onClick={ props.onClick } digit="4" letters="GHI" />
        <Digit key={ 5 } onClick={ props.onClick } digit="5" letters="JKL" />
        <Digit key={ 6 } onClick={ props.onClick } digit="6" letters="MNO" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit key={ 7 } onClick={ props.onClick } digit="7" letters="PQRS" />
        <Digit key={ 8 } onClick={ props.onClick } digit="8" letters="TUV" />
        <Digit key={ 9 } onClick={ props.onClick } digit="9" letters="WXYZ" />
      </div>
      <div className={ classnames(styles.keyboard__block, styles.keyboard__top) }>
        <Digit key="asterisk" onClick={ props.onClick } digit="*" letters="" />
        <Digit key={ 0 } onClick={ props.onClick } digit="0" letters="+" />
        <Digit key="hashtag" onClick={ props.onClick } digit="#" letters="" />
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

