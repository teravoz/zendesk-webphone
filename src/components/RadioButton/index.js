import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const RadioButton = (props) => {
  let checkedTheme = props.checked ? styles.radio__controlIndicator__inner__checked : '';
  return (
      <label className={styles.radio__control}>
        <span>{ props.label }</span>
        <input type="radio"
          checked={ props.checked } 
          onChange={ props.onCheck } />
        <div className={styles.radio__controlIndicator}>
          <div className={ styles.radio__controlIndicator__inner + ' ' + checkedTheme }>
          </div>
          </div>
      </label>
  );
}

RadioButton.propTypes = {
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default RadioButton;
