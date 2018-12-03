import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Digit = (props) => {
    return (
      <div className={ styles.digit }>
        <span className={styles.digit__number }>{ props.digit }</span>
        <span className={styles.digit__letters }> { props.letters } </span>
      </div>
    );
}

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  letters: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default Digit;
