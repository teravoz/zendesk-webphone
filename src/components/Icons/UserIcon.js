import React from 'react';
import PropTypes from 'prop-types';

const UserIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path fill={ props.color || "#787878" } fillRule="nonzero" d="M8 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/>
    </svg>
  );
}

UserIcon.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default UserIcon;
