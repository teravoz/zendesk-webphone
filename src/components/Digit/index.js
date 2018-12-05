import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Digit = (props) => {
    return (
      <div className={ styles.digit } onClick={ props.onClick(props.digit) }>
        <span className={styles.digit__number }>{ props.digit }</span>
        <span className={styles.digit__letters }> { props.letters } </span>
      </div>
    );
}

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  letters: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string
}

export default Digit;
