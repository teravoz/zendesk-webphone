import React from 'react';
import PropTypes from 'prop-types';

const HangupIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 10">
      <path fill="#FFF" fill-rule="evenodd" d="M1.824 8.743l.228.115c.528.263 1.377.239 1.89-.053l1.893-1.08c.512-.294.94-1.016.94-1.607V5.042a8.076 8.076 0 0 1 8.032.002V6.12c0 .589.427 1.31.94 1.605l1.892 1.082c.512.294 1.364.316 1.892.053l.226-.113c.529-.264.961-.963.96-1.554v-1.61c0-.287-.316-.788-.317-.789A13.458 13.458 0 0 0 10.792.75 13.438 13.438 0 0 0 1.21 4.77c-.014.014-.345.525-.345.812v1.61c-.001.589.432 1.287.959 1.551"/>
    </svg>
  );
}

HangupIcon.propTypes = {
  styles: PropTypes.string
};

export default HangupIcon;
