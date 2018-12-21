import React from 'react';
import PropTypes from 'prop-types';

const Settings = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14">
      <g fill="none" fill-rule="evenodd">
          <g fill={ props.color || "#787878" } transform="rotate(90 8.5 13.5)">
              <circle cx="2" cy="2" r="2"/>
              <circle cx="2" cy="8" r="2"/>
              <circle cx="2" cy="14" r="2"/>
          </g>
          <rect width="27" height="13" x=".5" y=".5" stroke="#B3B3B3" rx="2"/>
      </g>
    </svg>
  );
}

Settings.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default Settings;
