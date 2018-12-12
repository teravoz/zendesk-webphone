import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Button = (props) => {
  return (
    <button disabled={ props.disabled } onClick={ props.onClick || (() => {}) } 
      className={ classnames(props.classes, styles.button, 
      { [styles.button__primary]: props.primary }, 
      { [styles.button__transparent]: props.transparent }, 
      { [styles.button__medium]: props.medium }, 
      { [styles.button__transparent__red]: props.red } )
    }> 
      <div className={ styles.button__inner }>
        { props.icon ? <div className={ styles.button__icon__left }>{ props.icon }</div> : null }
        <span>{ props.label } </span>
      </div> 
    </button>
  );
}

Button.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  disabled: PropTypes.bool
}

export default Button;