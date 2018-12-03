import React from 'react';
import PropTypes from 'prop-types';

const KeyboardIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23">
      <g fill="none" fill-rule="evenodd">
          <path fill={ props.color || "#787878" } d="M1.905 3.81a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zM8 3.81A1.905 1.905 0 1 1 8 0a1.905 1.905 0 0 1 0 3.81zm6.095 0a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zM1.905 9.905a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zm6.095 0a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zm6.095 0a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zM1.905 16a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zM8 16a1.905 1.905 0 1 1 0-3.81A1.905 1.905 0 0 1 8 16zm0 6.095a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81zM14.095 16a1.905 1.905 0 1 1 0-3.81 1.905 1.905 0 0 1 0 3.81z"/>
      </g>
    </svg>
  );
}

KeyboardIcon.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default KeyboardIcon;
