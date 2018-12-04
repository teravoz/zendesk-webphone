import React from 'react';
import PropTypes from 'prop-types';

const ArrowIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6">
      <path fill={ props.color || '#787878' } fillRule="evenodd" d="M4 5.714L0 0h8z"/>
    </svg>
  );
}

ArrowIcon.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default ArrowIcon;
