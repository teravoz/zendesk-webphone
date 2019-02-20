import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Button = (props) => {
  const {
    label,
    disabled,
    onClick,
    icon,
    children,
    classes,
    primary,
    transparent,
    medium,
    red
  } = props;

  return (
    <button disabled={ disabled } onClick={ onClick || (() => {}) } 
      className={ classnames(classes, styles.button,
      { [styles.button__primary]: primary }, 
      { [styles.button__transparent]: transparent }, 
      { [styles.button__medium]: medium }, 
      { [styles.button__transparent__red]: red })
    }> 
      <div className={ styles.button__inner }>
        { icon ? <div className={ styles.button__icon__left }>{ icon }</div> : null }
        { children }
        {label ? <span>{ props.label } </span>: null}
      </div> 
    </button>
  );
}

Button.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  disabled: PropTypes.bool
}

export default Button;