import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.scss';

const Checkbox = (props) => {
  let checkedTheme = props.checked ? styles.controlIndicator__inner__checked : '';
  return (
      <label className={styles.control + ' ' + styles.controlCheckbox}>
        <span>{ props.label }</span>
        <input type="checkbox" 
          checked={ props.checked } 
          onChange={ props.onCheck } />
        <div className={styles.controlIndicator}>
          <div className={ styles.controlIndicator__inner + ' ' + checkedTheme }>
          </div>
          </div>
      </label>
  );
}

Checkbox.propTypes = {
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default Checkbox;
